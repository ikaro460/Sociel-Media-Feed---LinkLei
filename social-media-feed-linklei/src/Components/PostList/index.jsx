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
        <li>
          <h2>{post.authorName}</h2>
          <p>{post.text}</p>
        </li>
      ))}
      <li>Post</li>
    </ul>
  );
};
