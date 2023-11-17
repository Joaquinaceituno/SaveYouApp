import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './pantallas/login';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './firebase-config';

export default function App() {
  return (
    <Login />
    
  )


}

