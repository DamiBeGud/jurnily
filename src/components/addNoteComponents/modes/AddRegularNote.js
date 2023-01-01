import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'



import { useDispatch, useSelector } from 'react-redux'
import {setNote, setNoteTitle ,pushNote} from '../../../redux/reducers/addNote'
import {toggleNote} from '../../../redux/reducers/toggler'

const AddRegularNote = () => {


  const dispatch = useDispatch()
  const{text, title} = useSelector((state)=> state.addNote.note)

  function handleNoteTitle(event){
    dispatch(setNoteTitle(event))
  }
  function handleNote(event){
    dispatch(setNote(event))
  }

  return (
    <View style={styles.conteiner}>
    <View style={styles.header}>
    <TextInput placeholder='Title' value={title} onChangeText={handleNoteTitle} style={styles.title}></TextInput>
    <View style={styles.btnConteiner}>
      <TouchableOpacity style={styles.btn} onPress={()=> dispatch(pushNote())}><Text>Done</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=> dispatch(toggleNote())}><Text>Close</Text></TouchableOpacity>
    </View>
    </View>
      <TextInput placeholder='Note...' style={styles.textInput} multiline={true} value={text} onChangeText={handleNote}></TextInput>
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


