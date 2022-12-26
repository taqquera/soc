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

    let dialogsData = [
        {id: 1, name: 'Jusuf'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Serhii'},
        {id: 6, name: 'Doneko'},
        {id: 4, name: 'Altair'},
        {id: 5, name: 'Taras'},

    ]

    let messageData = [
        {id: 1, message: '21 savage y r u trappin so hard?'},
        {id: 2, message: 'take me home'},
        {id: 3, message: 'wassup'},
        {id: 4, message: 'good morning America'},
        {id: 5, message: 'metro boomin want some more ni66a'},
        {id: 6, message: 'dear diary...'},

    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/> 
            </div>

            <div className={s.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs