import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../src/screens/HomeScreen";
import Cards from "../src/screens/Cards";
import Statements from "../src/screens/Statements";
import Settings from "../src/screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'Museum' : 'Museum_s';
            } 
            else if (route.name === 'Cards') {
              iconName = focused ? 'Card' : 'Card_s';
            }
            else if (route.name === 'Statements') {
              iconName = focused ? 'Statement' : 'Statement_s';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'Gear' : 'Gear_s';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}