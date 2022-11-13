import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default landingPage = () => {
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
    <View style={styles.fields}>
    <Text style={styles.title}>Full Name</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.boxtext}>Create Account</Text>
      </View>
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
  },
  fields: {
    alignItems: 'left',
    justifyContent: 'left',
  },
  title: {
    color: '#DD6E42',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  box: {
    width: 350,
    height: 60,
    marginTop: 121,
    marginBottom: 10,
    borderRadius: 30,
    borderColor: '#B4B3B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxtext: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  bottom: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
