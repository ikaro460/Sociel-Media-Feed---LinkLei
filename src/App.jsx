import "./App.css";
import { ModalCreatePost } from "./Components/ModalCreatePost";
import { NoMorePosts } from "./Components/NoMorePosts";
import { PostList } from "./Components/PostList";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModalCreatePost />
        <PostList />
        <NoMorePosts />
        <GlobalStyle />
      </header>
    </div>
  );
}

export default App;
