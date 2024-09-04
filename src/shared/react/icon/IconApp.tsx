import React, { useEffect, useRef } from "react";

interface IconComponentProps {
  name: string;
  size?: string | number; // size puede ser un string como 'small', 'large' o un número para tamaño en px
}

const IconReact: React.FC<IconComponentProps> = ({ name, size = "24" }) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadIcon = async () => {
      const iconUrl = `/public/icons/${name}.svg`;

      try {
        const response = await fetch(iconUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const svgContent = await response.text();
        setSvgContent(svgContent);
      } catch (error) {
        setSvgContent(`
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Default SVG content here -->
          </svg>
        `);
      }
    };

    const setSvgContent = (svgContent: string) => {
      if (iconRef.current) {
        iconRef.current.innerHTML = svgContent;
        const svgElement = iconRef.current.querySelector("svg");
        if (svgElement) {
          applyContainerStyles(svgElement);
          applySizeStyles(svgElement);
        }
      }
    };

    const applyContainerStyles = (svgElement: SVGElement) => {
      // Ensure the SVG inherits the size from the component's container
      svgElement.style.width = "100%";
      svgElement.style.height = "100%";
    };

    const applySizeStyles = (svgElement: SVGElement) => {
      let width: string, height: string;
      const sizeAsNumber = Number(size);

      if (!isNaN(sizeAsNumber)) {
        width = `${size}px`;
        height = `${size}px`;
      } else {
        switch (size) {
          case "small":
            width = "16px";
            height = "16px";
            break;
          case "large":
            width = "48px";
            height = "48px";
            break;
          default:
            width = height = "24px"; // Default size
        }
      }

      svgElement.style.width = width;
      svgElement.style.height = height;
    };

    loadIcon();
  }, [name, size]);

  return <div ref={iconRef} />;
};

export default IconReact;
