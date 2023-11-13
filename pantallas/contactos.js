import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ContactosScreen = () => {
    const [contactos, setContactos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
  
    const agregarContacto = () => {
      if (nombre && telefono) {
        setContactos([...contactos, { id: Date.now().toString(), nombre, telefono }]);
        setNombre('');
        setTelefono('');
      }
    };