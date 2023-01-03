import { createSlice } from "@reduxjs/toolkit"


export const notesSlice = createSlice({
    name:"notes",
    initialState:{
        notes:[]
    },
    reducers:{
        getNotes: (state, actions) =>{
            state.notes = [...state.notes, actions.payload]
            // console.log(state.notes)
        }
    }
})



export const{getNotes} = notesSlice.actions

export default notesSlice.reducer


