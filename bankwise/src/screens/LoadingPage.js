import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default loadingPage = ({ navigation }) => {
   const [fontsLoaded] = useFonts({
    'Avigea': require('../../assets/fonts/Avigea.ttf'),
  });

  if(!fontsLoaded) {
    return <AppLoading/>;
  }

  const pressHandler = () => {
    navigation.navigate('LandingPage');
  }

  return (
    <TouchableWithoutFeedback
        onPress={pressHandler}
    >
    <View style={styles.container}>
      <Text style={styles.maintext}>bankwise</Text>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D7D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    color: '#DD6E42',
    fontFamily: 'Avigea',
    fontSize: 50,
  }
});
