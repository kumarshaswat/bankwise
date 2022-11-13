import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default loadingPage = () => {
   const [fontsLoaded] = useFonts({
    'Avigea': require('../../assets/fonts/Avigea.ttf'),
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>bitwise</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    color: '#DD6E42',
    fontFamily: 'Avigea',
    fontSize: 50,
  }
});
