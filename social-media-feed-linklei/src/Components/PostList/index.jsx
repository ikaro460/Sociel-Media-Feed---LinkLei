import { Post } from "../Post";

export const PostList = (posts) => {
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
