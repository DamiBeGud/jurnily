import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'

import { useDispatch } from 'react-redux'
import { toggleAuth} from '../../../redux/reducers/toggler'

const SignUp = () => {
    const dispatch = useDispatch()
  return (
    <View style={styles.conteiner}>
    <View style={styles.form}>

      <View style={styles.inputs}>
        <TextInput placeholder='email'style={styles.input}/>
        <TextInput placeholder='password'style={styles.input}/>
        <TextInput placeholder='repeate password'style={styles.input}/>
      </View>
      <View style={styles.btnConteiner}>
        <TouchableOpacity style={styles.btn}><Text>Sign Up</Text></TouchableOpacity>
        <Text>Or</Text>
        <TouchableOpacity style={styles.btn} onPress={()=>dispatch(toggleAuth())}><Text>Sign In</Text></TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    conteiner:{
        justifyContent:'center',
        height: "100%",
        alignItems: 'center',
        
    },
    form:{
        width: "80%",
        alignItems:'center',
        paddingTop: 100,
        paddingBottom:100,
        borderRadius: 8,
        backgroundColor:"gray",
    },
    inputs:{
        width: "80%",
        marginBottom:8,
    },
    input:{
        backgroundColor: "lightgray",
        marginBottom:8,
        padding:8,
        borderRadius:8,
    },
    btnConteiner:{
        justifyContent: "center",
    },
    btn:{
        marginTop:8,

    },
})