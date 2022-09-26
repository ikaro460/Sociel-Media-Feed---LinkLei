import { PostListProvider } from "./PostListProvider";
import { PostToEditProvider } from "./PostToEditProvider";
import { ShowModalProvider } from "./ShowModalProvider";

export const Providers = ({ children }) => {
  return (
    <ShowModalProvider>
      <PostToEditProvider>
        <PostListProvider>{children}</PostListProvider>;
      </PostToEditProvider>
    </ShowModalProvider>
  );
};
