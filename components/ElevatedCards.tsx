import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.titleText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.EleCard]}>
            <Text>why</Text>
        </View>
        <View style={[styles.card,styles.EleCard]}>
            <Text>are</Text>
        </View>
        <View style={[styles.card,styles.EleCard]}>
            <Text>doing</Text>
        </View>
        <View style={[styles.card,styles.EleCard]}>
            <Text>like</Text>
        </View>
        <View style={[styles.card,styles.EleCard]}>
            <Text>this</Text>
        </View>
        <View style={[styles.card,styles.EleCard]}>
            <Text>😐</Text>
        </View>
      </ScrollView>
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
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        width:100,
        height:100,
        fontSize:24,
        fontWeight:'bold',
        margin:8
    },
    EleCard:{
        backgroundColor:'#ff8095',
        elevation:10
        
    }

})