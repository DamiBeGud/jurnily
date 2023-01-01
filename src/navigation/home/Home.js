import { StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import  Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing
                    }  from 'react-native-reanimated'

import { useSelector,useDispatch } from "react-redux";

import NotesScreen from '../../screens/notesScreen/NotesScreen'
import CalendarScreen from '../../screens/calendarScreen/CalendarScreen'
import AddNoteScreen from '../../screens/addNoteScreen/AddNoteScreen'



import { db } from '../../firebase/firebase'
import { collection, getDocs, addDoc      } from "firebase/firestore"; 
import { getNotes} from '../../redux/reducers/notes'

const Home = () => {
    
    const dispatch = useDispatch()

        async function data(){
          const querySnapshot = await getDocs(collection(db, "notes"));
          querySnapshot.forEach((doc) => {
        //   console.log(`${doc.id} => ${doc.data()}`);
        // console.log(JSON.stringify(doc.data()))
        
        console.log(`${doc.id}`, doc.data())
        dispatch(getNotes(doc.data()))
      });
    }
    useEffect(()=>{
        data()
    },[])
    const x = useSharedValue(0)
    const y = useSharedValue(0)
    const prevY = useSharedValue(0)
    const {width} = useWindowDimensions() 


    const swipeGestureHandlerRight = useAnimatedGestureHandler({
        onStart: ()=>{
            console.log('On Start')

        },
        onActive: (event)=>{
            if(event.translationX < -40){
                x.value = event.translationX
            }else{
                if(event.translationY < 0 || y.value < 0){
                    y.value = prevY.value + event.translationY
                }
                return

            }
        },
        onEnd: ()=>{
            prevY.value = y.value
            if(x.value < -
                width / 2) {
                x.value = -width
            }else{
                x.value = 0
            }
        },

    })



    const swipeGestureHandlerLeft = useAnimatedGestureHandler({
        onStart: ()=>{
            console.log('On Start')
        },
        onActive: (event)=>{
            x.value = event.translationX - width

        },
        onEnd: ()=>{
            if(x.value > -width) {
                x.value = 0
            }else{
                x.value = -width
            }
        },

    })


    const animatedConteinerStyle = useAnimatedStyle(()=>({
        transform: [{translateX: withTiming(x.value, {duration: 100, easing : Easing.linear})}]
    }))

    const scrollNotesConteinerStyle = useAnimatedStyle(()=>({
        transform: [{translateY: withTiming(y.value, {duration: 10, easing : Easing.linear})}]
    }))

    const {addNote} = useSelector((state)=> state.toggle)
   
    
  return (
    <>
    <GestureHandlerRootView style={styles.homeConteiner}>
            <NotesScreen 
                swipeGestureHandlerRight={swipeGestureHandlerRight}
                animatedConteinerStyle={animatedConteinerStyle}
                scrollNotesConteinerStyle={scrollNotesConteinerStyle}
            ></NotesScreen>
            <CalendarScreen
                swipeGestureHandlerLeft={swipeGestureHandlerLeft}
                animatedConteinerStyle={animatedConteinerStyle}
            ></CalendarScreen>
    
    {addNote && <AddNoteScreen />}
    </GestureHandlerRootView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
    homeConteiner:{
        flexDirection: 'row',
        // height: "100%",
        width: "200%",
        
    }
})