const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Jusuf'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Serhii'},
        {id: 6, name: 'Taras'},
        {id: 4, name: 'Altair'},
        {id: 5, name: 'Donek'},
    ],
    messages: [
        {id: 1, message: 'Young Savage, why you trappin\' so hard, huh?'},
        {id: 2, message: 'take me home'},
        {id: 3, message: 'wassup'},
        {id: 4, message: 'good morning America'},
        {id: 5, message: 'metro boomin want some more ni66a'},
        {id: 6, message: 'dear diary...'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        
        case SEND_MESSAGE :
            let body = state.newMessageBody;
            state.messages.push({ id: 6, message: body});
            state.newMessageBody = '';
            return state;

        default: 
            return state;
    }
   
}

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;