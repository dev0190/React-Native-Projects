
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

//form validation
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(8, 'should be minimum 8 characters')
    .max(12, 'should be maximum of 16 characters')
    .required('Passwor length is required'),
});

export default function PassGen() {
  //usestates to update the values:
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  // methods to give functionality:

  const generatePassword = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitsChars = '0123456789';
    const specialChars = '!~@#$%^&*()_+';

    if (uppercase) {
      characterList += upperCaseChars;
    }
    if (lowercase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitsChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassowrd(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassowrd = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPassword = () => {
    //
    setPassword('');
    setIsPasswordGenerated(false);
    setUppercase(false);
    setLowercase(true);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.titleText}>Password Generator using R_N</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);

              generatePassword(+values.passwordLength); // + or Number are used to type casting ..into integer
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              isValid,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                    <Text style={styles.errorText}>
                        {errors.passwordLength}
                    </Text>
                )}
                  </View>
                  <View>
                  <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex:9"
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}> Include Lowercase</Text>
                  <BouncyCheckbox
                    isChecked={lowercase}
                    onPress={() => setLowercase(!lowercase)}
                    fillColor="#53E0BC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}> Include Uppercase</Text>
                  <BouncyCheckbox
                    isChecked={uppercase}
                    onPress={() => setUppercase(!uppercase)}
                    fillColor="#BB2CD9"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}> Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#FBD28B"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}> Include Symbols</Text>
                  <BouncyCheckbox
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#EA7773"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => {
                      handleSubmit();
                    }}
                    style={styles.primaryBtn}>
                    <Text style={styles.primaryBtnText}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.secondaryBtn}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}>
                    <Text style={styles.secondaryBtnText}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.title}>Result:</Text>
            <Text style={styles.description}>Long press to copy</Text>
            <Text selectable style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
  formContainer: {
    marginTop:10,

  },
  titleText: {
    fontSize: 25,
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
    padding:10,
    marginBottom:2
  },
  formActions: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    padding:6,
    marginTop:20
  },
  inputWrapper: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:4,
    paddingRight:40

  },
  inputColumn: {
  },
  inputStyle: {
    fontSize:18,
    color:'black',
    fontWeight:'900',
  },
  heading: {
    fontSize:20,
    color:'black',
    fontWeight:'bold',

  },
  errorText: {
    fontSize:14,
    color:'#E44236'
  },
  primaryBtn: {
    fontSize:16,
    backgroundColor:"#75DA8B",
    paddingVertical:8,
    paddingHorizontal:20,
    borderRadius:6
    
  },
  primaryBtnText: {
    fontSize:16,
    color:'#000',
    fontWeight:'400'
  },
  secondaryBtn: {
    fontSize:16,
    backgroundColor:"#FF4848",
    paddingVertical:8,
    paddingHorizontal:20,
    borderRadius:6
  },
  secondaryBtnText: {
    fontSize:16,
    color:'#000',
    fontWeight:'400'
  },
  generatedPassword: {
    color:'#000',
    fontSize:28,
    fontWeight:'bold',
    justifyContent:'center'
  },
  card: {
    height:200,
    width:370,
    backgroundColor:'#fff',
    borderColor:'#000',
    padding:5,
    marginTop:55
  },
  cardElevated: {
    margin:20,
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'#DAE0E2',
    borderRadius:20,
    justifyContent:'center'

  },
  title: {
    color:'black',
    fontSize:24,
    fontWeight:'900'
  },
  description: {
    color:'black',
    fontSize:18,
    fontWeight:'condensedBold'
  },
});
