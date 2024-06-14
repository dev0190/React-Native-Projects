// Topics Learn in this :
// Linking
// Touchable Opacity
// anAction card creation.
// No.of Lines
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.titleText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevation]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Hi! welcome to our new Universe.....
          </Text>
        </View>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={4} style={styles.bodyText}>
            The video discusses extending card design by focusing on touch
            controls, linking libraries, and Touchable Opacity in React Native
            apps. It emphasizes deep linking documentation and the use of
            Touchable Opacity for automatic styling changes
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://stackoverflow.com/questions/42649024/react-native-list-of-devices-attached-not-showing-any-device-also-could-no',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.linkedin.com/in/srinu-gavireddi-4430332a5/',
              )
            }>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginVertical:8
  },
  card: {
    width:380,
    height:350,
    borderRadius:8,
    marginVertical:12,
    marginHorizontal:15,
  },
  cardElevation: {
    backgroundColor:'#ffccff',
    elevation:4,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#2C3335',
    shadowOpacity:0.3 // range 0.2 to 1
  },
  headerContainer: {
    height:40,
    //flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    color:'#000',
    fontSize:16,
    fontWeight:'700'
  },
  cardImage: {
    height: 180,
  },
  bodyContainer: {
    padding:8
  },
  bodyText:{
    color:'#000',
    textAlign:'justify'
  },
  footerContainer: {
    padding:8,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:40
  },
  socialLinks: {
    fontSize:16,
    color:'#000',
    backgroundColor:"#3399ff",
    paddingVertical:4,
    paddingHorizontal:25,
    borderRadius:5
  
    
  },
});
