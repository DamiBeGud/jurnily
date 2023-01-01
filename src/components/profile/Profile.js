import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.imgConteiner}>
        <View style={styles.profileImage}></View>
      </View>
      <View style={styles.profileConteiner}>
        <Text style={styles.profileText}>Hello There</Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    conteiner:{
        width: "100%",
        height:100,
        // backgroundColor: "red",
        flexDirection: "row"
    },
    imgConteiner:{
        width: "50%",
        justifyContent: 'center',
        marginLeft: 30
    },
    profileImage:{
        width: 80,
        height: 80,
        backgroundColor: "green",
        // borderRadius: "100%",
        borderColor: "darkgray",
        borderWidth:3,
    },
    profileConteiner:{
        width: "50%",
        justifyContent: 'center',
   
    },
    profileText:{
        fontSize:20
    },
})