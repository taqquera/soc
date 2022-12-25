import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/280x280_RS/92/06/97/920697e6b14b5a37f80802711f20020f.jpg" alt="ava" />
            {props.message}
            <div>
                <span>likes: {props.likecounter}</span>
            </div>

        </div>
    )
}

export default Post