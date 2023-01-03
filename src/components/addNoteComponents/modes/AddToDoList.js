import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import urid from 'urid'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../../firebase/firebase'
import { useDispatch, useSelector } from 'react-redux'

import { toggleToDo } from '../../../redux/reducers/toggler'

import {
    setToDoTitle,
    setToDoText,
    resetToDoText, //reset input text
    setToDoList,
    removeItemFromList, 
    setToDoPreview,
    setToDoPOST, 
    resetToDo
                    }from "../../../redux/reducers/pageReducers/handleSlice" 


const AddToDoList = () => {
   


    const dispatch = useDispatch()
const{toDoTitle, toDoItemText, toDoList, toDoPOST} = useSelector((state)=>state.handleSlice)


function handleTitle(event){
    dispatch(setToDoTitle(event))   
}
function handleText(event){
    dispatch(setToDoText(event))
}
function handleAdd(){
    dispatch(setToDoList())
    dispatch(resetToDoText())
}
function handleRemoveItem(id){
    dispatch(removeItemFromList(id))
}



async function PostToDo(){
        await setDoc(doc(db, "todos", toDoPOST.id), {
            title:toDoPOST.title,
            itemIDs:toDoPOST.itemIDs,
            
          });
          await toDoList.forEach(item => {
             setDoc(doc(db, "todoItems", item.id), {
                text:item.text,
                checked: false
                
              });
          });
        dispatch(setToDoPOST())
        dispatch(resetToDo())

}

    function handleDone(){
        dispatch(setToDoPreview())
        PostToDo()
}

    const listItems = toDoList?.map((item)=>{

        return(
            <View style={styles.toDoItemConteiner} key={item.id}>
                <Text style={styles.toDoItemText}>{item.text}</Text>
                <TouchableOpacity 
                style={styles.btn}

                onPress={()=>handleRemoveItem(item.id)}

                 >
                <Text>Remove</Text>
                </TouchableOpacity>
            </View>

        )
    })
  return (
    <View style={styles.conteiner}>
        <View style={styles.header}>
            <TextInput placeholder='Title' style={styles.title} value={toDoTitle} onChangeText={handleTitle}></TextInput>
            <View style={styles.btnConteiner}>
                <TouchableOpacity style={styles.btn} onPress={handleDone}><Text>Done</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleToDo())}><Text>Close</Text></TouchableOpacity>
            </View>
        </View>
        <View style={styles.inputConteiner}>
            <TextInput placeholder='To do....' value={toDoItemText} onChangeText={handleText}></TextInput>
            <TouchableOpacity style={styles.btn} onPress={handleAdd}><Text>Add</Text></TouchableOpacity>
        </View>
        <View style={styles.toDosListConteiner}>
            {listItems}
        </View>
    </View>
  )
}

export default AddToDoList

const styles = StyleSheet.create({
    conteiner:{
        width:"100%",
        marginTop: 8,
        borderColor: "black",
        borderWidth: 1,
        padding: 8,
        borderRadius: 8,
        minHeight: 100,
    },
    header:{
        flexDirection:"row",
        justifyContent: 'space-between',
        marginBottom: 8,

    },
    title:{
    },
    btnConteiner:{
        flexDirection:"row"
    },
    btn:{
        marginRight: 8,
    },
    inputConteiner:{
        flexDirection:"row",
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    toDosListConteiner:{
    },
    toDoItemConteiner:{
        flexDirection:"row",
        backgroundColor: "pink",
        padding: 8,
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    toDoItemText:{
    },
})


