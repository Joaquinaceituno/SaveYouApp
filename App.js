import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './pantallas/login';


import Contacto from './pantallas/contactos';
import Registro from './pantallas/registro';
import MyDrawer from './pantallas/menu';
import Navigation from './navigation';


import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';




export default function App() {
  return (
    <Login />
<<<<<<< HEAD
  );
}



=======
  )
}
>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
