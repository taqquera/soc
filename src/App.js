import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

const addPost = (text, state, setState) => {
  const clone = JSON.parse(JSON.stringify(state));

  let newPost = {
    id: state.profilePage.posts.length + 1,
    message: text,
    likeCounter: 0,
  };

  clone.profilePage.posts.push(newPost);

  setState(clone);
};

function App(props) {
  const [state, setState] = useState({
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likeCounter: 27 },
        { id: 2, message: "It's my first post", likeCounter: 9 },
        { id: 3, message: "qq", likeCounter: 7 },
        { id: 4, message: "bbababab", likeCounter: 19 },
      ],
      newPostText: "speed always wins",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Jusuf" },
        { id: 2, name: "John" },
        { id: 3, name: "Serhii" },
        { id: 6, name: "Taras" },
        { id: 4, name: "Altair" },
        { id: 5, name: "Donek" },
      ],
      messages: [
        { id: 1, message: "Young Savage, why you trappin' so hard, huh?" },
        { id: 2, message: "take me home" },
        { id: 3, message: "wassup" },
        { id: 4, message: "good morning America" },
        { id: 5, message: "metro boomin want some more ni66a" },
        { id: 6, message: "dear diary..." },
      ],
    },
  });

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  state={state}
                  profilePage={state.profilePage}
                  setState={setState}
                  addPost={addPost}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
