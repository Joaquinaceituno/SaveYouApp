import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './pantallas/login';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
//firebase
import appFirebase from './assets/credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFirebase)

export default function App() {
  return (
    <Login />
    
  )


}

