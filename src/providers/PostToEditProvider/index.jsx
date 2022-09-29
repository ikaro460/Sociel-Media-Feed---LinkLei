import { createContext, useContext, useState } from "react";

//Used provider for opening two different modals

export const PostToEditContext = createContext();

export const PostToEditProvider = ({ children }) => {
  const [getPostToEdit, setPostToEdit] = useState(false);

  return (
    <PostToEditContext.Provider value={{ getPostToEdit, setPostToEdit }}>
      {children}
    </PostToEditContext.Provider>
  );
};

export const usePostToEdit = () => useContext(PostToEditContext);
