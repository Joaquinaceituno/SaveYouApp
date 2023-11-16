import * as react from 'react';
import * as location from 'expo-location';
import { View, Text, StyleSheet } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {GOOGLE_API_KEY} from '@env';

export default function Mapa() {
    const [origin, setOrigin] = react.useState({
        latitude: -38.951890,
        longitude: -68.059173,
    }) 

    const [destination, setDestination]= react.useState({
        latitude: -38.956585,
        longitude: -68.058960,
    })

    return (
        <View style={styles.container}>
            
            <MapView style={styles.map}
            initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
            }}
            >

            </MapView>
        </View>

            )
    }


