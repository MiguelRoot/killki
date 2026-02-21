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
      className={`flex items-center justify-center py-[8px] text-sm px-4 rounded-[4px] text-secondary-300 min-w-[70px] font-semibold cursor-pointer ${
        value === activeTab ? " !text-secondary-0 " : ""
      }`}
    >
      {children}
    </div>
  );
};

export default TabHeader;
