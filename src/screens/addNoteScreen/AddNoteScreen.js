import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import AddNoteComponentMain from '../../components/addNoteComponents/main/AddNoteComponentMain'

const AddNoteScreen = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.form}>

        <AddNoteComponentMain></AddNoteComponentMain>
      </View>
    </View>
  )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    conteiner:{
        width: "50%",
        height:"80%",
        position: "absolute",
        bottom:0,
        left:0,
        backgroundColor:"white",
        // borderColor: "black",
        // borderWidth:2
    },
    form:{
        width: "90%",
        marginLeft: "5%"
    }
})