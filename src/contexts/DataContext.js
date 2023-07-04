import React from "react";

const DataContext = React.createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
