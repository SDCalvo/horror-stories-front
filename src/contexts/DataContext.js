import React from "react";

const DataContext = React.createContext();

export default DataContext;

export const DataProvider = ({ children }) => {
  const [data, setData] = React.useState({
    genre: "",
    characters: "",
    setting: "",
    mood: "",
    theme: "",
    language: "",
    temperature: 0,
    generations: 0,
    gptResult: null,
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => React.useContext(DataContext);
