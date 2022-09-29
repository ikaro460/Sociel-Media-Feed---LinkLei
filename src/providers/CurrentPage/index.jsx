import { createContext, useContext, useState } from "react";

//Used provider for opening two different modals

export const CurrentPageContext = createContext();

export const CurrentPageProvider = ({ children }) => {
  const [getCurrentPage, setCurrentPage] = useState(1);

  return (
    <CurrentPageContext.Provider value={{ getCurrentPage, setCurrentPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};

export const useCurrentPage = () => useContext(CurrentPageContext);
