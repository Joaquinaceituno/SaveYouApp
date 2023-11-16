import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import Login from './pantallas/login';
import Contacto from './pantallas/contactos';
import Registro from './pantallas/registro';


export default function App() {
  return (
    <Navigation/>
  )

}

