import { PostListProvider } from "./PostListProvider";

export const Providers = ({ children }) => {
  return <PostListProvider>{children}</PostListProvider>;
};
