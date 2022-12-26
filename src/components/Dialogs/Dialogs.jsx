import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Jusuf'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Serhii'},
        {id: 6, name: 'Taras'},
        {id: 4, name: 'Altair'},
        {id: 5, name: 'Donek'},
    ]

    let messages = [
        {id: 1, message: 'Young Savage, why you trappin\' so hard, huh?'},
        {id: 2, message: 'take me home'},
        {id: 3, message: 'wassup'},
        {id: 4, message: 'good morning America'},
        {id: 5, message: 'metro boomin want some more ni66a'},
        {id: 6, message: 'dear diary...'},
    ]

    let dialogsElements = dialogs
        .map ( d => <DialogItem name={d.name} id={d.id}/> );

    let messagesElements = messages
        .map ( m => <Message message={m.message} />)    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                 {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs