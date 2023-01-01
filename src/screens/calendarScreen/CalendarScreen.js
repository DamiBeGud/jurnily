import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {PanGestureHandler} from 'react-native-gesture-handler'
import  Animated from 'react-native-reanimated'

import Header from '../../components/header/Header'

const CalendarScreen = ({swipeGestureHandlerLeft,animatedConteinerStyle}) => {
  return (

    <Animated.View style={[styles.view, animatedConteinerStyle]}>
        <SafeAreaView style={styles.safeAreaView}>
          <Header></Header>
        </SafeAreaView>
      <PanGestureHandler onGestureEvent={swipeGestureHandlerLeft}>
        <Animated.View style={{
        position: "absolute",
        width: "100%",
        height: 600,
        bottom:0,
        left: 0,
         }}/>
      </PanGestureHandler>
    </Animated.View>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  view:{
    // height: "100%",
    width: "50%",
}
})