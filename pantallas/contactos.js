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
    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Lista de Contactos</Text>
    
          <View style={styles.formulario}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={nombre}
              onChangeText={setNombre}
            />
   <TextInput
          style={styles.input}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />

        <TouchableOpacity style={styles.boton} onPress={agregarContacto}>
          <Text style={styles.textoBoton}>Agregar Contacto</Text>
        </TouchableOpacity>
      </View>
    