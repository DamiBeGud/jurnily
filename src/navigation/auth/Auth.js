import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux";

import SignIn from './signIn/SignIn'
import SignUp from './signUp/SignUp'
const Auth = () => {
    const {signIn,signUp} = useSelector((state)=> state.toggle.auth)
  return (
    <>
        {signIn && <SignIn></SignIn>}
        {signUp && <SignUp></SignUp>}
    </>
  )
}

export default Auth

const styles = StyleSheet.create({})