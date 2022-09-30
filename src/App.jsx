import "./App.css";
import { ModalCreateOrEditPost } from "./Components/ModalCreateOrEditPost";
import { NoMorePosts } from "./Components/NoMorePosts";
import { PostList } from "./Components/PostList";
import { LoadingAnimation } from "./graphics";
import { usePostList } from "./providers/PostList";
import GlobalStyle from "./styles/global";

function App() {
  const { postList } = usePostList();

  return (
    <div className="App">
      <header className="App-header">
        <ModalCreateOrEditPost />
        <PostList />
        {postList.length > 0 ? (
          <>
            <NoMorePosts />
          </>
        ) : (
          <LoadingAnimation />
        )}
        <GlobalStyle />
      </header>
    </div>
  );
}

export default App;
