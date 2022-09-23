import { createContext, useContext, useState } from "react";

export const PostListContext = createContext();

const BasePosts = [
  {
    id: 1,
    avatar:
      "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
    authorName: "Ícaro Gaspar Nascimento",
    date: "11-02-2022",
    category: "Post",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&w=1000&q=80",
    text: "Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. Deserunt minim commodo veniam sunt magna anim occaecat ipsum adipisicing voluptate et commodo eiusmod officia. Excepteur irure cupidatat fugiat dolor. Nisi ut dolor cupidatat qui consectetur aliqua ut id incididunt pariatur velit commodo. Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. Deserunt minim commodo veniam sunt magna anim occaecat ipsum adipisicing voluptate et commodo eiusmod officia. Excepteur irure cupidatat fugiat dolor. Nisi ut dolor cupidatat qui consectetur aliqua ut id incididunt pariatur velit commodo. Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. Deserunt minim commodo veniam sunt magna anim occaecat ipsum adipisicing voluptate et commodo eiusmod officia. Excepteur irure cupidatat fugiat dolor. Nisi ut dolor cupidatat qui consectetur aliqua ut id incididunt pariatur velit commodo. Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. Deserunt minim commodo veniam sunt magna anim occaecat ipsum adipisicing voluptate et commodo eiusmod officia. Excepteur irure cupidatat fugiat dolor. Nisi ut dolor cupidatat qui consectetur aliqua ut id incididunt pariatur velit commodo. Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. Deserunt minim commodo veniam sunt magna anim occaecat ipsum adipisicing voluptate et commodo eiusmod officia. Excepteur irure cupidatat fugiat dolor. Nisi ut dolor cupidatat qui consectetur aliqua ut id incididunt pariatur velit commodo. ",
  },
  {
    id: 2,
    avatar:
      "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg",
    authorName: "Ícaro Gaspar Nascimento",
    date: "11-02-2022",
    category: "Post",
    text: "Post 2 lorem ipsum 2",
  },
];

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
