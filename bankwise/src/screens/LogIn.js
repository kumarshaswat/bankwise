import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default logIn = ({ navigation }) => {
   const [fontsLoaded] = useFonts({
    'Avigea': require('../../assets/fonts/Avigea.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),

  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }
    
  return (
    <View style={styles.container}>
    <Text style={styles.maintext}>bankwise</Text>
    <Text style={styles.title}>Email</Text>
      <View style={styles.box}>
        <TextInput placeholder="Enter your email" placeholderTextColor="#AFAFAF" style={styles.textInput}/>
      </View>
    <Text style={styles.title}>Password</Text>
      <View style={styles.box}>
        <TextInput placeholder="Enter your email" placeholderTextColor="#AFAFAF" secureTextEntry={true} style={styles.textInput}/>
      </View>
      <TouchableOpacity
        onPress={() => navigation.push('HomeScreen')}
        >
    <View style={styles.box2}>
        <Text style={styles.boxtext}>Sign In</Text>
      </View>
        </TouchableOpacity>
        <TouchableOpacity>
      <Text style={styles.bottom}>
        Forgot Password?
      </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D7D2',
    alignItems: 'center',
    justifyContent: 'top',
  },
  maintext: {
    color: '#DD6E42',
    fontFamily: 'Avigea',
    fontSize: 40,
    marginTop: 60,
    marginBottom: 50,
  },
  fields: {
    alignItems: 'left',
    justifyContent: 'left',
  },
  title: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    alignSelf: 'left',
    marginLeft: 40,
  },
  box: {
    width: 356,
    height: 60,
    marginBottom: 45,
    borderRadius: 30,
    borderColor: '#B4B3B3',
    borderWidth: 1.5,
    alignItems: 'left',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  box2: {
    backgroundColor: '#DD6E42',
    width: 300,
    height: 50,
    marginTop: 23,
    marginBottom: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxtext: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  smalltext: {
    marginTop: 70,
    alignSelf: 'center',
  },
  bottom: {
    color: '#DD6E42',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  textInput: {
    width: '100%',
    height: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
},
});
