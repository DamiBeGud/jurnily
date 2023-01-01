import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AddRegularNote from '../modes/AddRegularNote'
import AddToDoList from '../modes/AddToDoList'
import NotePreview from '../previews/NotePreview'
import ToDoListPreview from '../previews/ToDoListPreview'

import { useDispatch, useSelector } from 'react-redux'
import { toggleAddNote, toggleNote, toggleToDo, toggleSchedual} from '../../../redux/reducers/toggler'
import { setTitle,pushItemID, restOneToDo } from '../../../redux/reducers/addNote'


import { db } from '../../../firebase/firebase'
import { collection, getDocs, addDoc      } from "firebase/firestore"; 
import urid from 'urid'
import { async } from '@firebase/util'

const AddNoteComponentMain = () => {
  const dispatch = useDispatch()
  const{title, notes, toDoS, id, date, oneToDo } = useSelector((state)=> state.addNote)
  const{note, toDo, schedual} = useSelector((state)=> state.toggle.addNoteModules)





function handleTitle(event){
  dispatch(setTitle(event))
}

const createNotesPreview = notes?.map((note, index)=>{
  return(
    <NotePreview key={index} note={note}></NotePreview>
  )
})
const createToDoSPreview = toDoS?.map((list, index)=>{
  return(
  <ToDoListPreview key={index} list={list}></ToDoListPreview> 

  )
})



async function postItems(item){
       try {
        const docRef = await addDoc(collection(db, "todoItem"), {
          text:item.text,
          checked: false,
        });
        console.log("Document written with ID: ", docRef.id);
        dispatch(pushItemID(docRef.id))
        

      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

async function postToDo(title){
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      title: title,
      itemIDs: oneToDo
    });
    console.log("Document written with ID: ", docRef.id);
    
    dispatch(restOneToDo())

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function postPage(){
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;

  

   for(let i = 0; i < toDoS.length; i++){
    
    toDoS[i].list.map(item=>{
      postItems(item)
    })
    postToDo(toDoS[i].title)
  }

 


}

  return (
    <View style={styles.conteiner}>
    
        <TextInput placeholder='Title' value={title} style={styles.titleInput} onChangeText={handleTitle}/>


        <View style={styles.btnConteiner}>
            <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleNote())}><Text>Note</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleToDo())}><Text>ToDo List</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Schedual</Text></TouchableOpacity>
        </View>


   {note && <AddRegularNote></AddRegularNote>}
   {toDo && <AddToDoList></AddToDoList>}
  
  {/* <NotePreview></NotePreview> */}
  {createNotesPreview}
  {createToDoSPreview}
    <View style={styles.btnConteiner}>
    <TouchableOpacity style={styles.btn} onPress={()=>postPage()}><Text>Add</Text></TouchableOpacity>
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


