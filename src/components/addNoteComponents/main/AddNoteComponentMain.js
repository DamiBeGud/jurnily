import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AddRegularNote from '../modes/AddRegularNote'
import AddToDoList from '../modes/AddToDoList'
import NotePreview from '../previews/NotePreview'
import ToDoListPreview from '../previews/ToDoListPreview'

import { useDispatch, useSelector } from 'react-redux'
import { toggleAddNote, toggleNote, toggleToDo, toggleSchedual} from '../../../redux/reducers/toggler'

import {setPageTitle}from "../../../redux/reducers/pageReducers/handleSlice" 


import { db } from '../../../firebase/firebase'
import { doc, setDoc } from "firebase/firestore"; 

import urid from 'urid'

const AddNoteComponentMain = () => {

  const dispatch = useDispatch()
const{note, toDo} = useSelector((state)=>state.toggle.addNoteModules)
const {pageTitle, page} = useSelector((state)=> state.handleSlice)
const {toDos, notes} = useSelector((state)=> state.handleSlice.preview)

const createNotesPreview = notes?.map((note)=>{
  return(
    <NotePreview key={note.id} note={note}></NotePreview>
  )
})

const createToDoSPreview = toDos?.map((list)=>{
  return(
  <ToDoListPreview key={list.id} list={list}></ToDoListPreview> 

  )
})

function handleTitle(event){

  dispatch(setPageTitle(event))
}

async function handleAdd(){
  await setDoc(doc(db, "pages", urid()), {
    title:page.title,
    noteIDs:page.noteIDs,
    toDoIDs:page.toDoIDs,
    userID:""
    
  })
  console.log(page)
  dispatch(toggleAddNote())
}

  return (
    <View style={styles.conteiner}>
    
        <TextInput placeholder='Title' value={pageTitle} style={styles.titleInput} onChangeText={handleTitle}/>


        <View style={styles.btnConteiner}>
            <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleNote())}><Text>Note</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleToDo())}><Text>ToDo List</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Schedual</Text></TouchableOpacity>
        </View>


   {note && <AddRegularNote></AddRegularNote>}
   {toDo && <AddToDoList></AddToDoList>}
  
<ScrollView>

  {createNotesPreview}
  {createToDoSPreview}
</ScrollView>
    <View style={styles.btnConteiner}>
    <TouchableOpacity style={styles.btn} onPress={handleAdd}><Text>Add</Text></TouchableOpacity>
    <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleAddNote())}><Text>Close</Text></TouchableOpacity>

    </View>
    </View>
  )
}

export default AddNoteComponentMain

const styles = StyleSheet.create({
  conteiner:{
    width:"100%",
    justifyContent:"center",
    paddingBottom: 20,
    paddingTop:40,
    borderTopColor: "black",
    borderTopWidth:2
  },
  btnConteiner:{
    width: "100%",
    justifyContent: 'center',
    flexDirection:"row",
    
  },
  btn:{
    marginTop: 18,
    padding:8,
  },
})


