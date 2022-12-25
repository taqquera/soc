import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} >{props.name}</NavLink>  
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                
                <DialogItem name="Jusuf" id="1"/>
                <DialogItem name="John" id="2"/>
                <DialogItem name="Serhii" id="3"/>
                <DialogItem name="Altair" id="4"/>
                <DialogItem name="Taras" id="5"/>
                <DialogItem name="Doneko" id="6"/>
            </div>

            <div className={s.messages}>
                <Message message="21 savage y r u trappin so hard?" />
                <Message message="take me home" />
                <Message message="wassup" />
                <Message message="good morning America" />
                <Message message="metro boomin want some more ni66a" />
                <Message message="dear diary..." />
            </div>
        </div>
    )
}

export default Dialogs