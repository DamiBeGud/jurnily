import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useDispatch } from 'react-redux'
import { toggleAddNote} from '../../redux/reducers/toggler'


const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <View style={styles.conteiner}>
      <View style={styles.screens}>
        <TouchableOpacity>
            <Text>Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Calendar</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={()=>dispatch(toggleAddNote())}>
            <Text>Add Note</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.settings}>
      <TouchableOpacity>
            <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    conteiner:{
        width: "100%",
        height: 50,
        // backgroundColor: "red",
        flexDirection: "row",
    },
    screens:{
        width: "70%",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    settings:{
        width: "30%",
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})