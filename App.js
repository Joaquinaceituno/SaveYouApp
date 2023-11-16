import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './pantallas/login';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import appFirebase from './assets/credenciales';

export default function App() {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  )

}

