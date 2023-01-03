import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable} from 'react-native'
import React, { useEffect } from 'react'

import { useSelector, useDispatch  } from "react-redux";


import Note from '../note/Note'



const Notes = () => {



const {notes} = useSelector((state)=> state.notes)


    const display = notes?.map(note=>{
      console.log(note.id)
      return(
        <View style={styles.conteiner} key={note.id}>
        <View style={styles.headerConteiner}>
        <View style={styles.titleDateConteiner}>
          <Text style={styles.dateText}>111</Text>
          <Text style={styles.titleText}>{note.title}</Text>
        </View>
          <View style={styles.btnConteiner}>
              <TouchableOpacity style={styles.btn}><Text>View</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>Edit</Text></TouchableOpacity>
              <TouchableOpacity style={styles.btn}><Text>Delete</Text></TouchableOpacity>
          </View>
        </View>
  
        <View style={styles.noteConteiner}>
          <Text style={styles.noteText}>{note.text}</Text>
        </View>
      </View>
      )
    })

  return (

<View style={styles.test}>

    <ScrollView>
        {display}
    </ScrollView>
</View>

 
  )
}

export default Notes

const styles = StyleSheet.create({
  test:{
    height: "90%"
  },
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

