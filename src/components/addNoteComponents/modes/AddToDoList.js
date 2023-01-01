import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { toggleToDo } from '../../../redux/reducers/toggler'
import { setToDoTitle, setToDoItem, pushItem, removeItem, pushList, itemReset } from '../../../redux/reducers/addNote'
import { async } from '@firebase/util'


const AddToDoList = () => {
    const {title, list, item} = useSelector((state) => state.addNote.toDo)
    const dispatch = useDispatch()


    function handleTitle(event){
        dispatch(setToDoTitle(event))
    }
     function handleItem(event){
        dispatch(setToDoItem(event))
       
    }
    function handleRemoveItem(id){
        dispatch(removeItem(id))
    }

    async function addItemToList() {
        await dispatch(pushItem())

        dispatch(itemReset())
    }

    const listItems = list?.map((item)=>{
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
            <TextInput placeholder='Title' style={styles.title} value={title} onChangeText={handleTitle}></TextInput>
            <View style={styles.btnConteiner}>
                <TouchableOpacity style={styles.btn} onPress={()=>dispatch(pushList())}><Text>Done</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleToDo())}><Text>Close</Text></TouchableOpacity>
            </View>
        </View>
        <View style={styles.inputConteiner}>
            <TextInput placeholder='To do....' value={item.text} onChangeText={handleItem}></TextInput>
            <TouchableOpacity style={styles.btn} onPress={()=>addItemToList()}><Text>Add</Text></TouchableOpacity>
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


