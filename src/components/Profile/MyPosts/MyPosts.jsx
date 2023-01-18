import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


    const MyPosts = (props) => {
        let postsElements = props.posts.map( p => <Post message={p.message} likeCounter={p.likeCounter} />)

        let newPostElement = React.createRef();

        let addPost = () => {
            props.dispatch(addPostActionCreator());
            newPostElement.current.value = '';
        }

        let onPostChange = () => { 
            let text = newPostElement.current.value;
            let action = updateNewPostTextActionCreator(text);
            props.dispatch(action);
        }

        return(
            <div className={s.postsBlock}>
                <h3>My Posts</h3>
                <div> 
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} />
                    </div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div  className={s.posts}>
                    {postsElements}
                </div>
                
            </div>
        )
    }

export default MyPosts