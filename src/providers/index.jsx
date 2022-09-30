import { CurrentPageProvider } from "./CurrentPage";
import { PostListProvider } from "./PostList";
import { PostToEditProvider } from "./PostToEdit";
import { ShowModalProvider } from "./ShowModal";

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
