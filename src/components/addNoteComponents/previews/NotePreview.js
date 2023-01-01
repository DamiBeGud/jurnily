import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NotePreview = ({note}) => {
    const{title, text} = note
  return (
    <View style={styles.conteiner}>
        <View style={styles.header}>
            <View style={styles.titleConteiner}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.btnConteiner}>
                <TouchableOpacity style={styles.btn}><Text>Delete</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><Text>Resize</Text></TouchableOpacity>
            </View> 
        </View>
        <View style={styles.noteConteiner}>
            <Text style={styles.noteText}>{text}.</Text>
        </View>
    </View>
  )
}

export default NotePreview

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
noteConteiner:{
},
noteText:{
    padding: 8,
},
})