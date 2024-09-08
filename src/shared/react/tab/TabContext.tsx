import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface TabContextProps {
  activeTab: string;
  setActiveTab: (tabValue: string) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

interface TabProviderProps {
  children: ReactNode;
  defaultTab: string | undefined;
}

export const TabProvider: React.FC<TabProviderProps> = ({
  children,
  defaultTab,
}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || "");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabProvider");
  }
  return context;
};
