import React, { useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const [text, setText] = useState("");

  let postsElements = props.state.profilePage.posts.map((p) => (
    <Post message={p.message} likeCounter={p.likeCounter} />
  ));

  let addPost = () => {
    props.addPost(text, props.state, props.setState);
  };

  let onPostChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} />
        </div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
