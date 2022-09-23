import { usePostList } from "../../providers/PostListProvider";
import { Post } from "../Post";
import { StyledList } from "./styles";

export const PostList = () => {
  const { postList } = usePostList();
  console.log(postList);
  return (
    <StyledList>
      {postList.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          avatar={post.avatar}
          authorName={post.authorName}
          date={post.date}
          category={post.category}
          image={post.image}
          text={post.text}
        />
      ))}
    </StyledList>
  );
};
