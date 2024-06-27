import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ColorMode() {
    const [randomBg,setRandomBg] = useState('#ffffff'); // we use any values,methods,functions etc in useState.

    // function to generate color 
    const generateColor =() =>{
        const hexaRange = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += hexaRange[Math.floor(Math.random() * 16)] 
        }
        setRandomBg(color)
    }

// main function
  return (
    <>
    <StatusBar backgroundColor={randomBg}/>
    <View style={[styles.container,{backgroundColor:randomBg}]}>
    <TouchableOpacity onPress={generateColor}>
        <View style={styles.colorBtn}>
            <Text style={styles.colorBtnTxt}>Color Mode</Text>
        </View>
    </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    colorBtn:{
        backgroundColor:"#F5BCBA",
        borderRadius:12,
        paddingVertical:12,
        paddingHorizontal:20,
    },
    colorBtnTxt:{
        fontSize:16,
        fontWeight:'900',
        color:'#000000',
        textTransform:'uppercase'
    },
})