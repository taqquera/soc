import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

    const MyPosts = () => {

        let postData = [
            {id: 1, message: 'Hi, how are you?', likeCounter: 27},
            {id: 2, message: 'It\'s my first post', likeCounter: 9},
        ]

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
                    <Post message={postData[0].message} likeCounter={postData[0].likeCounter} />
                    <Post message={postData[1].message} likeCounter={postData[1].likeCounter}/>
                </div>
                
            </div>
        )
    }

export default MyPosts