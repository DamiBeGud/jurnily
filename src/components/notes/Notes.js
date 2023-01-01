import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useEffect } from 'react'

import { useSelector, useDispatch  } from "react-redux";


import Note from '../note/Note'



const Notes = () => {



const {notes} = useSelector((state)=> state.notes)


    const display = notes?.map(note=>{return(<Note key={note.title} title={note.title} date={note.date} text={note.text}></Note>)})
  return (


    <View>
       
        {display}
    </View>

 
  )
}

export default Notes

const styles = StyleSheet.create({
    // scrollView:{
    //     height: "100%",
    // }
})

