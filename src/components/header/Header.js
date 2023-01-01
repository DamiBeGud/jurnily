import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Profile from '../profile/Profile'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <>
        <Profile></Profile>
        <Navbar></Navbar>
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