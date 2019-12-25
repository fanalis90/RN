import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import {
  TabNavigator,
  createAppContainer
} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack';
import {
  createBottomTabNavigator
} from 'react-navigation-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from "./android/src/screens/Home";
import App from "./android/src/screens/cobaScreen";
import AbsenScreen from "./android/src/screens/AbsenScreen";
import BuatIzinScreen from "./android/src/screens/BuatIzinScreen";
import HistoriAbsenScreen from "./android/src/Stack/HistoryAbsenScreen";
import ListIzinScreen from "./android/src/Stack/ListIzinScreen";
import JenisIzinScreen from "./android/src/screens/JenisIzinScreen";
import CekIzin from "./android/src/screens/CekIzinScreen";

const AppNavigator = createStackNavigator({
  Coba: {
    screen: App,
  },
  Home: {
    screen: HomeScreen,
  },
  Absen: {
    screen: AbsenScreen,
  },
  BuatIzin: {
    screen: BuatIzinScreen,
  },
  JenisIzin: {
    screen: JenisIzinScreen,
  },
  CekIzin: {
    screen: CekIzin,
  },
  Tabs: createBottomTabNavigator({
    HistoriIzin: { screen: ListIzinScreen },
    HistoriAbsen: { screen: HistoriAbsenScreen },
  }),
  ListIzin: {
    screen: ListIzinScreen,
  },

}
  ,
);


// const Tabs = createBottomTabNavigator(
//   {
//     HistoriIzin: HistoriIzinStack,
//     HistoriAbsen: HistoriAbsenStack,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `home`;
//         } else if (routeName === 'Cuti') {
//           iconName = `calendar`;
//         }

//         // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons =  /n ${focused ? '' : '-outline'}
//         return <Icon name={iconName} size={25} color={tintColor} />;
//       },

//     }),
//     tabBarOptions: {
//       activeTintColor: 'blue',
//       inactiveTintColor: 'gray',
//     },
//   },
//   {
//     initialRouteName: 'HistoriAbsen',
//   }
// )

export default createAppContainer(AppNavigator);


