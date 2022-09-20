import { Post } from "../Post";

export const PostList = () => {
  const posts = [
    {
      id: 1,
      avatar:
        "https://cdna.artstation.com/p/assets/images/images/028/581/580/large/2d-illustrator-4.jpg?1594883171",
      authorName: "Ícaro Gaspar Nascimento",
      date: "11-02-2022",
      category: "Post",
      image: "url",
      text: "lorem ipsum",
    },
    {
      id: 2,
      avatar:
        "https://cdna.artstation.com/p/assets/images/images/028/581/580/large/2d-illustrator-4.jpg?1594883171",
      authorName: "Ícaro Gaspar Nascimento",
      date: "11-02-2022",
      category: "Post",
      text: "Post 2 lorem ipsum 2",
    },
  ];
  return (
    <ul>
      {posts.map((post) => (
        <Post
          id={post.id}
          avatar={post.avatar}
          authorName={post.authorName}
          date={post.date}
          category={post.category}
          image={post.image}
          text={post.text}
        />
      ))}
      <li>Post</li>
    </ul>
  );
};
