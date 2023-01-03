import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Profile from '../profile/Profile'
import Navbar from '../navbar/Navbar'

const Header = ({redirectCalendar, redirectNote}) => {
  return (
    <>
        <Profile></Profile>
        <Navbar redirectCalendar={redirectCalendar} redirectNote={redirectNote}></Navbar>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    conteiner:{
    },
    imgConteiner:{},
    profileImage:{},
    profileConteiner:{},
    profileText:{},
})