import { createContext, useContext, useState } from "react";

//Used provider for opening two different modals

export const ShowModalAddContext = createContext();

export const ShowModalProvider = ({ children }) => {
  const [getShowModal, setShowModalAdd] = useState(false);

  const showModal = () => {
    setShowModalAdd(true);
  };

  const hideModal = () => {
    setShowModalAdd(false);
  };

  return (
    <ShowModalAddContext.Provider
      value={{ getShowModal, setShowModalAdd, showModal, hideModal }}
    >
      {children}
    </ShowModalAddContext.Provider>
  );
};

export const useShowModal = () => useContext(ShowModalAddContext);
