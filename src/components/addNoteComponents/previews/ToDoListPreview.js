import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ToDoListPreview = ({list}) => {

   
    const createList = list.items?.map(item=>{
        
        return(
            <View style={styles.itemConteiner} key={item.id}>
                <Text style={styles.itemText}>{item.text}</Text>
                <View style={styles.itemBtnConteiner}>
                <TouchableOpacity style={styles.btn}><Text>Done</Text></TouchableOpacity>
                </View>

            </View>

        )
    })
  return (
    <View style={styles.conteiner}>
        <View style={styles.header}>
            <View style={styles.titleConteiner}>
                    <Text style={styles.titleText}>{list.title}</Text>
                </View>
                <View style={styles.btnConteiner}>
                    <TouchableOpacity style={styles.btn}><Text>Delete</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.btn}><Text>Resize</Text></TouchableOpacity>
                </View>
            </View>
        <View style={styles.listConteiner}>
        {createList}
        </View>
    </View>
  )
}

export default ToDoListPreview

const styles = StyleSheet.create({
    conteiner:{
        width: "100%",
        backgroundColor:"lightgray",
        padding: 8,
        borderRadius: 8,
        marginTop:8,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom: 8,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    titleConteiner:{
        width: "70%",
        
    },
    titleText:{
          
    },
    btnConteiner:{
        flexDirection:"row",
        width: "30%",
        justifyContent:"flex-end",
    },
    btn:{
        marginRight: 8,
    },
    listConteiner:{
        marginTop:8,
        
    },
    
    itemConteiner:{
        padding: 4,
        borderRadius: 4,
        backgroundColor:"pink",
        flexDirection:"row",
        width: "100%",
        marginTop:8,
        justifyContent: "space-between",
    },
    itemText:{},
    itemBtnConteiner:{
        flexDirection:"row",
    },

})