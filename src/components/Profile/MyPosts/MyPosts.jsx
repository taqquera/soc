import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

    const MyPosts = () => {
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
                    <Post message='Hi, how are you?' likecounter='27' />
                    <Post message="It's my first post" likecounter='9'/>
                </div>
                
            </div>
        )
    }

export default MyPosts