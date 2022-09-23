import { createContext, useContext, useState } from "react";
import { BasePosts } from "../../utils/BasePosts";

export const PostListContext = createContext();

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState(BasePosts);

  const addPost = (newPost) => {
    setPostList([...postList, newPost]);
  };

  return (
    <PostListContext.Provider value={{ postList, addPost }}>
      {children}
    </PostListContext.Provider>
  );
};

export const usePostList = () => useContext(PostListContext);
