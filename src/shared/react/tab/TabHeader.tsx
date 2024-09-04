// TabHeader.js
import React, { type FC } from "react";
import { useTabContext } from "./TabContext";

interface TabHeaderProps {
  value: string;
  children: React.ReactNode;
}

const TabHeader: FC<TabHeaderProps> = ({ value, children }) => {
  const { activeTab, setActiveTab } = useTabContext();

  return (
    <div
      onClick={() => setActiveTab(value)}
      // style={value === activeTab ? activeTabHeaderStyle : tabHeaderStyle}
      className={`p-2 rounded-[4px] text-primary-600 min-w-[70px] text-center font-bold cursor-pointer ${
        value === activeTab ? "bg-primary-600 text-white" : ""
      }`}
    >
      {children}
    </div>
  );
};

// Styles
// const tabHeaderStyle: React.CSSProperties = {
//   padding: "10px",
//   textAlign: "center",
//   cursor: "pointer",
//   // backgroundColor: "#fff",
//   borderBottom: "1px solid rgba(0,0,0,0.15)",
// };

// const activeTabHeaderStyle: React.CSSProperties = {
//   ...tabHeaderStyle,
//   backgroundColor: "#ccc",
//   borderBottom: "none",
//   cursor: "default",
// };

export default TabHeader;
