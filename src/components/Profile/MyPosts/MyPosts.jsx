import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

    const MyPosts = () => {

        let posts = [
            {id: 1, message: 'Hi, how are you?', likeCounter: 27},
            {id: 2, message: 'It\'s my first post', likeCounter: 9},
        ]

        let postsElements = posts.map( p => <Post message={p.message} likeCounter={p.likeCounter} />)

        return(
            <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <div> 
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
                <div  className={s.posts}>
                    {postsElements}
                </div>
                
            </div>
        )
    }

export default MyPosts