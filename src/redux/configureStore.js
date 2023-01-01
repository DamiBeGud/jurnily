import { configureStore,} from "@reduxjs/toolkit";


import toggleReducer from './reducers/toggler'
import notesReducer from './reducers/notes'
import addNoteReducer from './reducers/addNote'


export default configureStore({
    reducer:{
        toggle:toggleReducer,
        notes: notesReducer,
        addNote: addNoteReducer
    }
})