// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


import React from "react";
import {
  View, // it is just like div in web
  Text, // string r characteres
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  Button,
  Alert
} from 'react-native'

function App1(){
  return(               // without 'return()' keyword we can't execute the expected o/p.
    // <SafeAreaView>      // if we remove SafeAreaView,there is nothing will happen, but it was useful in somecases.
    // <View>
    //   <Text>Hello World!</Text>
    //   <Text>Hello World!</Text>
    //   <Text>Hello World!</Text>
    //   <Text>Hello World!</Text>
    // </View>
    // </SafeAreaView>
    <ScrollView>
      <View>
        <Image 
        source={require('./logo.png')}
        style={{width:120,height:40,margin:5}}
        />
        <Text style={{textAlign:"center", color:'green', marginTop:20}}>MS INFOTECH</Text>
      </View>
      <View>
        <Text style={{paddingLeft:220,marginBottom:20}}> A new Innovation</Text>
      </View>
      <View style={{
        margin:20,
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        // padding:10
        }}>
        <Text style={{alignSelf:"center",fontSize:30,fontFamily:'Roboto',marginTop:25}}>Register</Text>
        <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginTop:40,
          marginLeft:30,
          marginRight:30,
          borderRadius:30,
          paddingLeft:20
          
          
        }}
        placeholder="Enter Username/Email">
      </TextInput>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,

          marginLeft:30,
          marginTop:25,
          marginRight:30,
          borderRadius:30,
          paddingLeft:20
          
        }}
        placeholder="Enter Password">
      </TextInput>
      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginLeft:30,
          marginTop:25,
          marginRight:30,
          borderRadius:30,
          marginBottom:40,
          paddingLeft:20
          
        }} placeholder="Confirm Password">
      </TextInput>
      <View style={{
        marginTop:30,
        marginLeft:60,
        marginRight:60,
        marginBottom:25,
      }}><Button
      title="Register"
      onPress={() => Alert.alert('Register Successfully')}
      /></View>
      </View>
    </ScrollView>

  )
}


export default App1;



// Project1-Hello Wolrd!

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   useColorScheme
// } from 'react-native';

// function App2(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark'
//   return(
//     <View style={styles.container}>
//         <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
//         Hello Jiya
//         </Text>

//     </View>
//   )
// }

// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems:'center', // flex-start,flex-end,center,baseline
//         justifyContent:'center' //flex-start,flex-end,center,space-between,space-around,space-evenly
//     },
//     whiteText:{
//         color:'white'
//     },
//     darkText:{
//         color:'black'
//     }
// })

// export default App2;




