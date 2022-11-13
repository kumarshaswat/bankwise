import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
//import { NavigationContainer } from '@react-navigation/native';
//import { createbottomTabNavigator } from '@react-navigation/bottom-tabs';

export default homeScreen = ({ navigation }) => {
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
        <View style={styles.top}>
            <Image 
                source={require('../../assets/images/Alarm.png')} 
            />
            <Text style={styles.maintext}>bankwise</Text>
            <Image 
                source={require('../../assets/images/Male_User.png')} 
            />
        </View>
        <View style={{height: 300, width: '100%'}} >
            <ScrollView
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}
                
            >
        <TouchableOpacity
            //onPress ={() => nagivation.navigate({screens: "LogIn"})}
            >

      <View style={styles.box}>
        <Text style={styles.title}>Capital One Money Teen Checking Account</Text>
        <Text style={styles.subtitle}>ACCOUNT ID: ••••••0123</Text>
        <Text style={styles.cost}>$89.61</Text>
        <Text style={styles.subtitle}>Current Balance</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.title}>Wells Fargo Way2Save Savings Account</Text>
        <Text style={styles.subtitle}>ACCOUNT ID: ••••••0123</Text>
        <Text style={styles.cost}>$8,902.83</Text>
        <Text style={styles.subtitle}>Current Balance</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.title}>Bank of America Advantage Savings</Text>
        <Text style={styles.subtitle}>ACCOUNT ID: ••••••••0123</Text>
        <Text style={styles.cost}>$282.19</Text>
        <Text style={styles.subtitle}>Current Balance</Text>
      </View>
      </TouchableOpacity>
      </ScrollView>
      </View>
      <Image 
                source={require('../../assets/images/moneycoins.png')} 
                style={styles.image}
            />
      <Text style={styles.maintext2}>Select an account {'\n'}to view more. </Text>
      <TouchableOpacity>
    <View style={styles.box2}>
            <Image 
                source={require('../../assets/images/Plus.png')} 
            />
        <Text style={styles.boxtext}>Add an Account</Text>
      </View>
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
  top: {
    width: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    marginLeft: 30,
  },
  maintext: {
    color: '#DD6E42',
    fontFamily: 'Avigea',
    fontSize: 40,
    marginTop: 60,
    marginBottom: 50,
  },
  maintext2: {
    color: '#969696',
    fontFamily: 'Avigea',
    fontSize: 30,
    marginTop: 60,
    textAlign: 'center',
    justifyContent: 'center',
  },
  fields: {
    alignItems: 'left',
    justifyContent: 'left',
  },
  title: {
    color: '#000000',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  subtitle: {
    color: '#7C7C7C',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  cost: {
    color: '#DD6E42',
    fontFamily: 'Poppins-Bold',
    fontSize: 50,
    letterSpacing: 1,
    },
  box: {
    width: 330,
    height: 190,
    marginTop: 50,
    marginBottom: 50,
    marginRight: 20,
    borderRadius: 30,
    padding: 20,
    backgroundColor: '#D5D7D2',
    alignItems: 'left',
    justifyContent: 'top',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 30.00,
  },
  box2: {
    backgroundColor: '#DD6E42',
    width: 300,
    height: 50,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 120,
    marginBottom: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  scroll: {
    width: '100%',
    lenth: '100%',
    paddingLeft: 25,
},
});
