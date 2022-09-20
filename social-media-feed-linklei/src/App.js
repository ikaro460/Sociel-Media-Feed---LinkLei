import logo from "./logo.svg";
import "./App.css";
import { PostList } from "./Components/PostList";

function App() {
  const posts = [
    {
      id: 1,
      avatar:
        "https://cdna.artstation.com/p/assets/images/images/028/581/580/large/2d-illustrator-4.jpg?1594883171",
      authorName: "Ícaro Gaspar Nascimento",
      date: "11-02-2022",
      category: "Post",
      image: "url",
      text: "lorem ipsum",
    },
    {
      id: 2,
      avatar:
        "https://cdna.artstation.com/p/assets/images/images/028/581/580/large/2d-illustrator-4.jpg?1594883171",
      authorName: "Ícaro Gaspar Nascimento",
      date: "11-02-2022",
      category: "Post",
      text: "Post 2 lorem ipsum 2",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <PostList posts={posts} />
      </header>
    </div>
  );
}

export default App;
