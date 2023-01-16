import React from "react";
import s from './Friends.module.css';

const Friends = (props) => {
    return(
        <div className={s.freinds}>
            <h2 className={s.friendsTitle}>Friends</h2>
            <div className={s.itemsWrapper}>
                <div className={s.friendsItem}>
                    <img className={s.avatars} src="https://i.pinimg.com/originals/d7/a7/e7/d7a7e793450a182cb46de027d7aa71aa.jpg" alt="avatar" />
                    <div className={s.name}>Jusuf</div>
                </div>
                <div className={s.friendsItem}>
                    <img className={s.avatars} src="https://i.pinimg.com/originals/d7/a7/e7/d7a7e793450a182cb46de027d7aa71aa.jpg" alt="avatar" />
                    <div className={s.name}>Jusuf</div>
                </div>
                <div className={s.friendsItem}>
                    <img className={s.avatars} src="https://i.pinimg.com/originals/d7/a7/e7/d7a7e793450a182cb46de027d7aa71aa.jpg" alt="avatar" />
                    <div className={s.name}>Jusuf</div>
                </div>
            </div>
            
        </div>
    )
}

export default Friends 