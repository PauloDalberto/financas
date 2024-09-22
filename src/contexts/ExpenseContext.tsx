import React, { createContext, useContext, useState } from "react";

export interface ValueData {
  description: string;
  value: number;
  typeSpent: string;
}

export type ValueDataContextProps = {
  data: ValueData[];
  addData: (newData: ValueData) => void;
  resetData: () => void;
  removeData: (index: number) => void; 
  updateData: (index: number, updatedData: ValueData) => void; 
};

const ValueDataContext = createContext<ValueDataContextProps>({} as ValueDataContextProps);

const ValueDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ValueData[]>([]);

  const addData = (newData: ValueData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const resetData = () => {
    setData([]);
  };

  const removeData = (index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index)); 
  };

  const updateData = (index: number, updatedData: ValueData) => {
    setData((prevData) =>
      prevData.map((item, i) => (i === index ? updatedData : item)) 
    );
  };

  return (
    <ValueDataContext.Provider value={{ data, addData, resetData, removeData, updateData }}>
      {children}
    </ValueDataContext.Provider>
  );
};

const useValueData = () => {
  const context = useContext(ValueDataContext);
  if (!context) {
    throw new Error("useValueData must be used within a ValueDataProvider");
  }
  return context;
};

export { ValueDataProvider, useValueData };
