import "./App.css";
import { ModalCreatePost } from "./Components/ModalCreatePost";
import { NoMorePosts } from "./Components/NoMorePosts";
import { PostList } from "./Components/PostList";
import { GlobalStyled } from "./styles/global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyled>
          <ModalCreatePost />
          <PostList />
          <NoMorePosts />
        </GlobalStyled>
      </header>
    </div>
  );
}

export default App;
