import { useEffect } from "react";
import { useCurrentPage } from "../../providers/CurrentPage";
import { usePostList } from "../../providers/PostListProvider";
import { Post } from "../Post";
import { StyledList } from "./styles";

export const PostList = () => {
  const { postList, getPostListFromApi } = usePostList();
  const { getCurrentPage } = useCurrentPage();

  useEffect(() => {
    getPostListFromApi(getCurrentPage);
  }, [getCurrentPage]);

  return (
    <StyledList>
      {postList.length > 0
        ? postList.map((post, index) => (
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
          ))
        : null}
    </StyledList>
  );
};
