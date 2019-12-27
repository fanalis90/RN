// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     Alert,
//     TouchableOpacity
// } from 'react-native';
// import geolocation from 'react-native-geolocation-service'

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//         'Double tap R on your keyboard to reload,\n' +
//         'Shake or press menu button for dev menu'
// });

// export default class App extends Component {
//     state = {
//         longitude: null,
//         latitude: null,
//     };

//     findCoordinates = () => {
//         geolocation.getCurrentPosition(
//             position => {
//                 const longitude = JSON.stringify(position.coords.longitude);
//                 const latitude = JSON.stringify(position.coords.latitude);

//                 this.setState({ longitude, latitude });
//             },
//             error => Alert.alert(error.message),
//             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//         );
//     };

//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableOpacity onPress={this.findCoordinates}>
//                     <Text style={styles.welcome}>Find My Coords?</Text>
//                     <Text>longitude: {this.state.longitude}</Text>
//                     <Text>Latitude: {this.state.latitude}</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF'
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5
//     }
// });