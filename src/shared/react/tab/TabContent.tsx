// TabContent.js
import React from "react";
import { useTabContext } from "./TabContext";

interface TabContentProps {
  value: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ value, children }) => {
  const { activeTab } = useTabContext();

  return (
    <div style={{ display: value === activeTab ? "block" : "none" }}>
      {children}
    </div>
  );
};

export default TabContent;
