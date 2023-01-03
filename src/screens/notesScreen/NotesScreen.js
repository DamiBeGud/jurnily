import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import {PanGestureHandler} from 'react-native-gesture-handler'
import React from 'react'
import  Animated from 'react-native-reanimated'

import Header from '../../components/header/Header'
import Notes from '../../components/notes/Notes'




const NotesScreen = ({swipeGestureHandlerRight,animatedConteinerStyle, scrollNotesConteinerStyle, redirectCalendar}) => {

  return (
    <Animated.View style={[styles.screen,animatedConteinerStyle]}>
    <SafeAreaView style={styles.safeAreaView}>
    <Header redirectCalendar={redirectCalendar}></Header>

    {/* <View style={styles.view}>
    <Animated.View style={[styles.notes, scrollNotesConteinerStyle]}>
      <Notes></Notes>
    </Animated.View>
    </View> */}
<View>
  <Notes></Notes>

</View>


    </SafeAreaView>

      <PanGestureHandler onGestureEvent={swipeGestureHandlerRight}>
        <Animated.View style={{
        position: "absolute",
        width: "100%",
        height: 200,
        bottom:0,
        left: 0,
         }}/>
      </PanGestureHandler>
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  screen:{
      height: "100%",
      width: "50%",
  },
  safeAreaView:{
    height: "100%",
    width: "100%",
  },
  view:{
    overflow: "scroll",
  },
  notes:{
    
  }
})
export default NotesScreen


