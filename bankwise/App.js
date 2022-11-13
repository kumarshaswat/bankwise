import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import LandingPage from "./src/screens/LandingPage";
import LoadingPage from "./src/screens/LoadingPage";
import CreateAccount from "./src/screens/CreateAccount";
import LogIn from "./src/screens/LogIn";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoadingPage" options={{headerShown: false}} component={LoadingPage} />
        <Stack.Screen name="LandingPage" options={{headerShown: false}} component={LandingPage} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="CreateAccount" options={{headerShown: false}} component={CreateAccount} />
        <Stack.Screen name="LogIn" options={{headerShown: false}} component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});