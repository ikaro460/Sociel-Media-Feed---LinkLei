import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";

export const PostListContext = createContext();

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  const [totalCount, setTotalCount] = useState({});

  const getPostListFromApi = (currentPage) => {
    api
      .get(`/posts?_page=${currentPage}&_limit=5&_sort=id&_order=desc`)
      .then((res) => {
        console.log(res);
        console.log(Number(res.headers["x-total-count"]));
        setTotalCount(Number(res.headers["x-total-count"]));
        if (postList.length > 0) {
          setPostList([...postList, ...res.data]);
          console.log(postList);
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
