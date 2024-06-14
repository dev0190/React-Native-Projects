import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.titleText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevation]}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/696755906/photo/taj-mahal-agra-india.webp?b=1&s=170667a&w=0&k=20&c=KWHt-WapwuSZF-x4IbZkzaxDS2hcrL3pBf-WEmDsIUk=',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Taj Mahal</Text>
          <Text style={styles.cardLabel}>Agra, India</Text>
          </View>
          <Text style={styles.cardDescription}>
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India. It was
            commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to
            house the tomb of his beloved wife, Mumtaz Mahal; it also houses the
            tomb of Shah Jahan himself.{' '}
          </Text>
          <Text style={styles.cardFooter}>10 mins ago.</Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color:'#000000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    
  },
  card: {
    height:400,
    width:380,
    borderRadius:10,
    marginVertical:12,
    marginHorizontal:15
  },
  cardElevation: {
    backgroundColor:'#ffffff',
    elevation:3,
    shadowOffset:{
      width:1,
      height:1
    }
  },
  cardImage: {
    height: 180,
    marginBottom:8,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  cardHeader:{
    flexDirection:'row',
    justifyContent:'flex-start'

  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  // titleContainer:{
  //   flex:1,
  //   flexDirection:'row',
  //   justifyContent:'space-between'
  // },
  cardTitle: {
    color:'#000000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4,
  },
  cardLabel: {
    color:'#000000',
    fontSize:16,
    marginTop:4,
    marginLeft:180,
    marginBottom:6,
    
  
  },
  cardDescription: {
    color:'#2C3335',
    fontSize:14,
    textAlign:'justify',
    marginBottom:6,
    marginTop:12,
    // justifyContent:'space-evenly'
  },
  cardFooter:{
    marginTop:10,
    color:'#000000',
    fontSize:16,
    fontWeight:'400'
  }
});
