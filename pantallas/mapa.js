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
}