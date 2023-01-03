import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../../firebase/firebase'

import { useDispatch, useSelector } from 'react-redux'
import {
  setNoteTitle,
  setNoteText,
  setNotePOST,
  resetNote,
  setNotesPreview
} from "../../../redux/reducers/pageReducers/handleSlice"


import {toggleNote} from '../../../redux/reducers/toggler'


const AddRegularNote = () => {

  const{noteTitle, noteText, notePOST} = useSelector((state=> state.handleSlice))

  const dispatch = useDispatch()

  function handleTitle(event){
    dispatch(setNoteTitle(event))
  }
  function handleText(event){
    dispatch(setNoteText(event))
  }
  async function handlePOST(){
    await setDoc(doc(db, "notes", notePOST.id), {
      title:notePOST.title,
      text:notePOST.text
      
    });
    dispatch(setNotePOST())
    dispatch(resetNote())
  }
  function handleDone(){
    dispatch(setNotesPreview())
     handlePOST()

  }

  return (
    <View style={styles.conteiner}>
    <View style={styles.header}>
    <TextInput placeholder='Title' value={noteTitle} onChangeText={handleTitle} style={styles.title}></TextInput>
    <View style={styles.btnConteiner}>
      <TouchableOpacity style={styles.btn} onPress={handleDone}><Text>Done</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=> dispatch(toggleNote())}><Text>Close</Text></TouchableOpacity>
    </View>
    </View>
      <TextInput placeholder='Note...' style={styles.textInput} multiline={true} value={noteText} onChangeText={handleText}></TextInput>
    </View>
  )
}

export default AddRegularNote

const styles = StyleSheet.create({
    conteiner:{
        width: "100%",
        marginTop: 8,
    },
    header:{
      flexDirection: 'row',
      justifyContent: "space-between",
      marginBottom:8,
    },
    title:{
      borderColor: "black",
      borderWidth:1,
      borderRadius: 8,
      padding: 8,
      width: "50%"
    },
    btnConteiner:{
      flexDirection: 'row',
    },
    textInput:{ 
        borderColor: "black",
        borderWidth: 2,
        padding:8,
        minHeight:100,
        borderRadius:8,
    },
    btn:{
      alignItems:'center',
      marginTop: 8,
      marginRight:8,

    }
})


