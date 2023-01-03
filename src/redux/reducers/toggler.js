import { createSlice } from "@reduxjs/toolkit"


export const togglerSlice = createSlice({
    name:"toggler",
    initialState:{
        auth:{
            signUp: false,
            signIn: true
        },
        addNote: false,
        addNoteModules:{
            note: false,
            toDo: false,
            schedual: false
        },
        home:{
            xValue:0
        }
    },
    reducers:{
        toggleAuth: (state) => {
            state.auth.signUp = !state.auth.signUp
            state.auth.signIn = !state.auth.signIn
        },
        toggleAddNote: (state) =>{
            state.addNote = !state.addNote
            
        },
        toggleNote: (state) =>{
            state.addNoteModules.note = !state.addNoteModules.note
        },
        toggleToDo: (state) =>{
            state.addNoteModules.toDo = !state.addNoteModules.toDo
        },
        toggleSchedual: (state) =>{
            state.addNoteModules.schedual = !state.addNoteModules.schedual
        }
    }
})



export const{toggleAuth, toggleAddNote, toggleNote, toggleToDo, toggleSchedual} = togglerSlice.actions

export default togglerSlice.reducer
