import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    
    <View>
      <Text style={styles.titleText}>FlatCards</Text>
    
    <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Black</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Pink</Text>
        </View>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Blueee</Text>
        </View>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    titleText:{
        color:'#000000',
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:5
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:5,
        margin:10
    },
    cardOne:{
        backgroundColor:'#33d6ff'
    },
    cardTwo:{
        backgroundColor:'#999999'
    },
    cardThree:{
        backgroundColor:'#ff8095'
    }
})