import { createContext, useContext, useState } from "react";
import { BasePosts } from "../../utils/BasePosts";

export const PostListContext = createContext();

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState(BasePosts);

  const addPost = (newPost) => {
    setPostList([...postList, newPost]);
  };

  const deletePost = (id) => {
    setPostList(postList.filter((e) => e.id !== id));
  };

  const editPost = (editedPost, id) => {
    console.log(postList.find((e) => e.id === id));
    console.log(editedPost);
  };

  return (
    <PostListContext.Provider
      value={{ postList, setPostList, addPost, deletePost, editPost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export const usePostList = () => useContext(PostListContext);
