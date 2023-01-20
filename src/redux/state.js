const ADD_POST =  'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// profile
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
// dialogs


let store = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounter: 27},
                {id: 2, message: 'It\'s my first post', likeCounter: 9},
                {id: 3, message: 'qq', likeCounter: 7},
                {id: 4, message: 'bbababab', likeCounter: 19},
            ],
            newPostText: 'speed always wins'
        },
    
        dialogsPage:{
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
        },
},
    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText  = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({ id: 6, message: body});
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } 
    },
}

  export const addPostActionCreator = () =>  ({ type: ADD_POST })
  export const updateNewPostTextActionCreator = (text) =>  ({ type: UPDATE_NEW_POST_TEXT, newText: text })
  //profile
  export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
  export const updateNewMessageBodyCreator = (body) =>  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
  //dialogs

window.store = store

export default store
