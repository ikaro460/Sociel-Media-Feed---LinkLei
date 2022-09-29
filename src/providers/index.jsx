import { CurrentPageProvider } from "./CurrentPage";
import { PostListProvider } from "./PostListProvider";
import { PostToEditProvider } from "./PostToEditProvider";
import { ShowModalProvider } from "./ShowModalProvider";

export const Providers = ({ children }) => {
  return (
    <CurrentPageProvider>
      <PostToEditProvider>
        <ShowModalProvider>
          <PostListProvider>{children}</PostListProvider>;
        </ShowModalProvider>
      </PostToEditProvider>
    </CurrentPageProvider>
  );
};
