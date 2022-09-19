export const PostList = () => {
  const posts = [
    {
      id: 1,
      avatar: "url",
      authorName: "Ícaro Gaspar Nascimento",
      date: "11-02-2022",
      category: "Post",
      image: "url",
      text: "lorem ipsum",
    },
    {
      id: 2,
      avatar: "url",
      authorName: "Ícaro Gaspar Nascimento",
      date: "11-02-2022",
      category: "Post",
      image: "url",
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
