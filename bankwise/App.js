import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoadingPage from './src/screens/LoadingPage';
import LandingPage from './src/screens/LandingPage';
import CreateAccount from './src/screens/CreateAccount';



export default function App() {
  return (
      <CreateAccount />
  );
};

const styles = StyleSheet.create({

});