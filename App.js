import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pantallas/login';
import Contacto from './pantallas/contactos';
import Registro from './pantallas/registro';
import MyDrawer from './pantallas/menu';
import Navigation from './navigation';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
//firebase
import appFirebase from './assets/credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth'

export default function App() {
  return (
    
      <Login />
    
  )

}

