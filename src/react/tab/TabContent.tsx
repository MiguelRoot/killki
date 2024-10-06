// TabContent.js
import React from "react";
import { useTabStore } from "./TabContext";
// import { useTabContext } from "./TabContext";

interface TabContentProps {
  value: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ value, children }) => {
  // const { activeTab } = useTabContext();
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <div style={{ display: value === activeTab ? "block" : "none" }}>
      {children}
    </div>
  );
};

export default TabContent;
