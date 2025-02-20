import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { LeafletView } from 'react-native-leaflet';
const DEFAULT_COORDINATE = {
    lat: 37.78825,
    lng: -122.4324,
};
export default function App() {
    return (React.createElement(SafeAreaView, { style: styles.root },
        React.createElement(LeafletView, { mapMarkers: [
                {
                    position: DEFAULT_COORDINATE,
                    icon: '📍',
                    size: [32, 32],
                },
            ], mapCenterPosition: DEFAULT_COORDINATE })));
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
