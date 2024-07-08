import { 
  Image,
  ImageSourcePropType,
    Pressable,
    StyleSheet, 
    Text,
    View,

        } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


import D1 from '../assets/1.png'
import D2 from '../assets/2.png'
import D3 from '../assets/3.png'
import D4 from '../assets/4.png'
import D5 from '../assets/5.png'
import D6 from '../assets/6.png'

// prop to repeat images
type DiceProps = PropsWithChildren<
{
  imageUrl:ImageSourcePropType
}>

//created component to render the images
const Dice = ({imageUrl}:DiceProps):JSX.Element => {
  return(
  <View>
  <Image style={styles.DiImage} source={imageUrl}/>
  </View>
  )
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
export default function RollingDice() {
  const [diceImage,setDiceImage] = useState<ImageSourcePropType>(D1)

  const rollDiceOnTap = () =>{
    let randomNumber = Math.floor(Math.random()*6)+1

    switch (randomNumber) {
      case 1:
        setDiceImage(D1)
        break;
      case 2:
        setDiceImage(D2)
        break;
      case 3:
        setDiceImage(D3)
        break;
      case 4:
        setDiceImage(D4)
        break;
      case 5:
        setDiceImage(D5)
        break;
      case 6:
        setDiceImage(D6)
        break;
      default:
        setDiceImage(D1)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.DiceButton}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  DiImage:{
    width: 200,
    height:200
  },
  container:{
    flex:1,
    //alignContent:'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#01CBC6'
  },
  DiceButton:{
    fontSize:16,
    fontWeight:'900',
    textTransform:'uppercase',
    color:'#000000',
    backgroundColor:'#ffffff',
    borderWidth:3,
    borderRadius:22,
    borderColor:'#000000',
    // paddingVertical:10,
    // paddingHorizontal:16,
    padding:10,
    marginTop:20,
    textAlign:'center',
  }
})