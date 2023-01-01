import { async } from '@firebase/util'
import {createSlice} from '@reduxjs/toolkit'
import urid from 'urid'


export const addNoteSlice = createSlice({
    name:"addNote",
    initialState:{
        page:{
            title:"",
            date:"",
            notes:[],
            toDoS:[],
            plans:[],  
        },
        
         id:"",
         title:"",
         date:"",
         notes:[],
         toDoS:[],
         plans:[],

        oneToDo:[],
         //Helpers
         note:{
            title:"",
            text:""
         },
        toDo:{
            title: "",
            item: {
                id:"",
                text:""
            },
            list:[]
        }
    },
    reducers:{
        setTitle: (state, actions) =>{
            state.title = actions.payload
        },
        pushList:(state) =>{
            state.toDoS.push({
               title: state.toDo.title, 
               list: state.toDo.list
            })
            console.log(state.toDoS)
            
        },
        pushNote: (state)=>{
            state.notes.push(state.note)
            state.note = {
                title:"",
                text:""
            }
            console.log(state.notes)
        },

        //bundle into one object
        pushItemID: (state, actions)=>{
            state.oneToDo.push(actions.payload)
            console.log(state.oneToDo)
        },
        restOneToDo: (state)=>{
            state.oneToDo = []
        },
        pushToDoList: (state)=>{
            
        },

    
        //helpers
            //notes
        setNote: (state, actions)=>{
            state.note.text = actions.payload    
        },
        setNoteTitle: (state, actions) =>{
            state.note.title= actions.payload
        },
            //to dos

        setToDoTitle: (state, actions) =>{
            state.toDo.title = actions.payload
        },
        setToDoItem: (state, actions) =>{
            state.toDo.item.text = actions.payload
        },
        pushItem: (state) =>{
            state.toDo.item.id = urid()
            state.toDo.list.push(state.toDo.item)
        },
        removeItem:(state, actions) =>{
            state.toDo.list = state.toDo.list.filter(item=> item.id !== actions.payload)
            
        },
        itemReset: (state)=>{
            state.toDo.item = {
                id:"",
                text:""
            }
        }

    }
})

export const {
    setTitle,
    setNote,
    setNoteTitle,
    pushNote,
    setToDoTitle,
    setToDoItem,
    pushItem,
    removeItem,
    pushList,
    itemReset,
    pushItemID,
    restOneToDo,
    

                    } = addNoteSlice.actions

export default addNoteSlice.reducer


            

