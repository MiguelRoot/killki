import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  type ReactNode,
} from "react";

// Definimos las interfaces para las props de los componentes
interface DropdownContextProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

interface DropdownProps {
  children: ReactNode;
}

interface DropdownToggleProps {
  children: ReactNode;
}

interface DropdownMenuProps {
  children: ReactNode;
  align?: "left" | "right";
}

interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
}

// Creamos un contexto para manejar el estado del dropdown
const DropdownContext = createContext<DropdownContextProps | undefined>(
  undefined
);

const Dropdown: React.FC<DropdownProps> & {
  Toggle: React.FC<DropdownToggleProps>;
  Menu: React.FC<DropdownMenuProps>;
  Item: React.FC<DropdownItemProps>;
} = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  // Maneja el evento de clic fuera del dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    // Escuchar los clics en el documento
    document.addEventListener("mousedown", handleClickOutside);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown, closeDropdown }}>
      <div className="dropdown" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// Subcomponente Toggle
Dropdown.Toggle = ({ children }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown.Toggle must be used within a Dropdown");
  }
  const { isOpen, toggleDropdown } = context;
  return (
    <button
      onClick={toggleDropdown}
      className={`transform-gpu dropdown-toggle ${isOpen ? "-rotate-90" : ""}`}
    >
      {children}
    </button>
  );
};

// Subcomponente Menu
Dropdown.Menu = ({ children, align = "left" }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown.Menu must be used within a Dropdown");
  }
  const { isOpen } = context;

  // Determinamos la clase según la alineación
  const alignmentClass =
    align === "right" ? "dropdown-menu-right" : "dropdown-menu-left";

  return isOpen ? (
    <div className={`dropdown-menu ${alignmentClass}`}>{children}</div>
  ) : null;
};

// Subcomponente Item
Dropdown.Item = ({ children, onClick }) => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown.Item must be used within a Dropdown");
  }
  const { closeDropdown } = context;

  const handleClick = () => {
    if (onClick) {
      onClick(); // Ejecutar la función personalizada si se proporciona
    }
    closeDropdown(); // Cerrar el menú después del clic
  };

  return (
    <div className="dropdown-item" onClick={handleClick}>
      {children}
    </div>
  );
};

export default Dropdown;
