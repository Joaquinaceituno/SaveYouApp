import * as react from 'react';
import * as location from 'expo-location';
import { View, Text, StyleSheet } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {GOOGLE_API_KEY} from '@env';
<<<<<<< HEAD


export default function Mapa() {
    const [origin, setOrigin] = react.useState({
=======

export default function Mapa() {
    const [origin, setOrigin] = react.useState({ //ubicacion predeterminada de inicio
>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
        latitude: -38.951890,
        longitude: -68.059173,
    }) 

<<<<<<< HEAD
    const [destination, setDestination]= react.useState({
        latitude: -38.956585,
        longitude: -68.058960,
    })
    



    return (
        <View style={styles.container}>
            
            <MapView style={styles.map}
=======
    const [destination, setDestination]= react.useState({ //ubicacion predeterminada de llegada
        latitude: -38.956585,
        longitude: -68.058960,
    })

    return (
        <View style={styles.container //contenedor de todo el mapa 
    }> 
            
            <MapView style={styles.map} //mapa
>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
            initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
            }}
            >
<<<<<<< HEAD
                <Marker 
=======
                <Marker //marcador de inicio
>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
                draggable={true}
                coordinate={origin}
                onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate) }
                />
<<<<<<< HEAD
                <Marker 
=======
                <Marker //marcador de llegada
>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
                draggable={true}
                coordinate={destination}
                onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                />
<<<<<<< HEAD
                <MapViewDirections
=======
                <MapViewDirections //ruta para ir de una direccion a otra
>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_API_KEY}
                    strokeColor='blue'
                    strokeWidth={6} 
                />

            </MapView>
        </View>
<<<<<<< HEAD
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    map: {
        width: '100%',
        height: '100%'
    }



});
=======

            )
    }

    const styles = StyleSheet.create({ //estilos de contenedor y mapa
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        map: {
            width: '100%',
            height: '100%'
        }
    
    
    
    });


>>>>>>> 1bbb01758f1c0c521f6127c10ec5e8396de15e69
