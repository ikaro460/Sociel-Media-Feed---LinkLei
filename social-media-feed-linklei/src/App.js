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
      text: "Ullamco tempor laboris amet ipsum magna elit proident voluptate deserunt qui. Elit ea minim ad labore do quis cupidatat consequat. Deserunt minim commodo veniam sunt magna anim occaecat ipsum adipisicing voluptate et commodo eiusmod officia. Excepteur irure cupidatat fugiat dolor. Nisi ut dolor cupidatat qui consectetur aliqua ut id incididunt pariatur velit commodo. ",
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
