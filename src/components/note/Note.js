import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Note = ({title, date, text}) => {

    // const{title, date, text} = note
    const text1 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyamerat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  return (

    <View style={styles.conteiner}>
      <View style={styles.headerConteiner}>
      <View style={styles.titleDateConteiner}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.titleText}>{title}</Text>
      </View>
        <View style={styles.btnConteiner}>
            <TouchableOpacity style={styles.btn}><Text>View</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Edit</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btn}><Text>Delete</Text></TouchableOpacity>
        </View>
      </View>

      <View style={styles.noteConteiner}>
        <Text style={styles.noteText}>{text}</Text>
      </View>
    </View>

  )
}

export default Note

const styles = StyleSheet.create({
    conteiner:{
        width: "90%",
        marginLeft:"5%",
        borderColor:"black",
        borderWidth: 1,
        padding:8,
        // borderRadius: 8,
        marginBottom:8,

    },
    headerConteiner:{
        width:"100%",
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        paddingBottom:5,

    },
    titleDateConteiner:{
        flexDirection: 'row',
        width:"50%",
        justifyContent: "space-between",
    },
    dateText:{
        marginLeft:5,
    },
    titleText:{},
    btnConteiner:{
        width:"50%",
        flexDirection: 'row',
        justifyContent: "flex-end",
    },
    btn:{
        marginRight:5,
    },
    noteConteiner:{
        width: "100%",
        marginTop: 10,
    },
    noteText:{},
})