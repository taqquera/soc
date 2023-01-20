import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
}


window.store = store

export default store
