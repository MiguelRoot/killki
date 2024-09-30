import { useState } from "react";

// Definir la interfaz para el tipo de dato de cada menú
interface Code {
  title: string;
  code: string;
}

export interface MenuItemType {
  codeId: string;
  title: string;
  active: boolean;
  content: string;
  code: string;
  codes: Code[];
}

// Custom Hook con tipado
const useMenuItem = (menuItem: MenuItemType) => {
  const [item, setItem] = useState<MenuItemType>(menuItem);

  const toggleActive = () => {
    setItem((prevItem) => ({
      ...prevItem,
      active: !prevItem.active,
    }));
  };

  const updateContent = (newContent: string) => {
    setItem((prevItem) => ({
      ...prevItem,
      content: newContent,
    }));
  };

  const updateTitleAndCode = (code: Code) => {
    setItem((prevItem) => ({
      ...prevItem,
      title: code.title, // Cambia el título
      code: code.code, // Cambia el código
    }));
  };

  const updateState = (newState: MenuItemType) => {
    setItem(newState);
  };

  return { item, toggleActive, updateContent, updateState, updateTitleAndCode };
};

export default useMenuItem;
