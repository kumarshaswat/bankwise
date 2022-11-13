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
      <Text style={styles.maintext}>All your banks,</Text>
      <Text style={styles.maintext2}>all in one place.</Text>
      <Image 
        source={require('../../assets/images/cardscoins.png')} 
        style={styles.image}
        />
      <View style={styles.box}>
        <Text style={styles.boxtext}>Create Account</Text>
      </View>
      <Text style={styles.bottom}>
        Don't have an account?
      <Text style={{color: '#DD6E42', fontFamily: 'Poppins-Bold' }}>
        {' '} Log in
      </Text>
      </Text>
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
    color: '#000000',
    fontFamily: 'Avigea',
    fontSize: 40,
    marginTop: 195,
  },
  maintext2: {
    color: '#000000',
    fontFamily: 'Avigea',
    fontSize: 40,
  },
  image: {
    margin: 30,
  },
  box: {
    backgroundColor: '#DD6E42',
    width: 300,
    height: 50,
    marginTop: 121,
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
  bottom: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
