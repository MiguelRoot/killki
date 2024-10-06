// TabHeader.js
import React, { type FC } from "react";
import { useTabStore } from "./TabContext";
// import { useTabContext } from "./TabContext";

interface TabHeaderProps {
  value: string;
  children: React.ReactNode;
}

const TabHeader: FC<TabHeaderProps> = ({ value, children }) => {
  // const { activeTab, setActiveTab } = useTabContext();
  const { activeTab, setActiveTab } = useTabStore();

  return (
    <div
      onClick={() => setActiveTab(value)}
      // style={value === activeTab ? activeTabHeaderStyle : tabHeaderStyle}
      className={`flex  items-center justify-center py-[8px] px-4 rounded-[4px] text-primary-600 min-w-[80px] font-bold cursor-pointer ${
        value === activeTab ? "bg-primary-600 text-white" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TabHeader;
