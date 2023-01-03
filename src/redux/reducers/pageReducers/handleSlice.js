import {createSlice} from '@reduxjs/toolkit'
import urid from "urid"

export const handleSlice = createSlice({
    name:"handleSlice",
    initialState:{
        //sates to handle inputs
        pageTitle: "",
        toDoTitle:"",
        toDoItemText:"",
        toDoList:[],
        noteTitle: "",
        noteText:"",
        //previews
        preview:{
            toDos:[],
            notes:[]
        },
        //post states
        toDoPOST:{
            id:urid(),
            title:"",
            itemIDs:[],
        },
        notePOST:{
            id: urid(),
            title:"",
            text:""
        },
        page:{
            title:"",
            toDoIDs:[],
            noteIDs:[],
        }
    },
    reducers:{
        setPageTitle:(state, actions)=>{
            state.pageTitle = actions.payload
            state.page.title = actions.payload
        },

        setToDoTitle:(state,actions)=>{
            state.toDoTitle= actions.payload
            state.toDoPOST.title = actions.payload
        },
        setToDoText:(state,actions)=>{
            state.toDoItemText= actions.payload
        },
        resetToDoText: (state)=>{
            state.toDoItemText = ""
        },
        setToDoList:(state)=>{
            let id = urid()
            state.toDoList.push({id:id, text: state.toDoItemText})
            state.toDoPOST.itemIDs.push(id)

            // console.log(state.page.toDoIDs)
        },
        removeItemFromList: (state, actions)=>{
            state.toDoList = state.toDoList.filter(item=> item.id !== actions.payload)
        },
        setToDoPreview: (state)=>{
            state.preview.toDos.push({id:state.toDoPOST.id, title: state.toDoPOST.title, items:state.toDoList})
            // state.toDoList = []
        },
        setToDoPOST: (state)=>{
           
            
            state.page.toDoIDs.push(state.toDoPOST.id)
            console.log(state.page.toDoIDs)
        },
        resetToDo: (state)=>{
            state.toDoPOST = {
                id:urid(),
                title:"",
                itemIDs:[],
            },
            state.toDoItemText = ""
            state.toDoTitle=""
            state.toDoList = []
        },

        setNoteTitle: (state, actions)=>{
            state.noteTitle = actions.payload
            state.notePOST.title = actions.payload
        },
        setNoteText:(state, actions)=>{
            state.noteText = actions.payload
            state.notePOST.text = actions.payload   
        },
        setNotePOST: (state)=>{
            state.page.noteIDs.push(state.notePOST.id)
            console.log(state.page.noteIDs)
        },
        setNotesPreview: (state)=>{
            state.preview.notes.push(state.notePOST)
        },
        resetNote:(state)=>{
            state.notePOST = {
                id: urid(),
                title:"",
                text:""
            }
            state.noteTitle = ""
            state.noteText = ""

        }

    }
})

export const {
        setPageTitle,
        setToDoTitle,
        setToDoText,
        resetToDoText,
        setToDoList,
        removeItemFromList,
        setToDoPreview,
        setToDoPOST,
        resetToDo,


        setNoteTitle,
        setNoteText,
        setNotePOST,
        resetNote,
        setNotesPreview
                        } = handleSlice.actions

export default handleSlice.reducer