import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

export const PostListContext = createContext();

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [totalCount, setTotalCount] = useState({});

  const getPostListFromApi = (currentPage) => {
    //get posts according to the current page using routes to customize its content
    api
      .get(`/posts?_page=${currentPage}&_limit=5&_sort=id&_order=desc`)
      .then((res) => {
        setTotalCount(Number(res.headers["x-total-count"]));
        if (postList.length > 0) {
          setPostList([...postList, ...res.data]);
        } else {
          setPostList(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPost = (formData) => {
    api
      .post(`/posts`, formData)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletePost = (id) => {
    api
      .delete(`/posts/${id}`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editPost = (formData) => {
    api
      .patch(`/posts/${formData.id}`, formData)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        setPostList,
        addPost,
        deletePost,
        editPost,
        getPostListFromApi,
        totalCount,
        setTotalCount,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export const usePostList = () => useContext(PostListContext);
