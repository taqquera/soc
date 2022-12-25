import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
             <div className={s.background}>
                <img src="https://images2.alphacoders.com/542/542730.png" alt="background" />
            </div>

            <div className={s.descriptionBlock}>
              ava + description
            </div>
        </div>
    )
}

export default ProfileInfo 