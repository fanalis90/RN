import React, { Component } from 'react';
import Icon from 'react-native-vector-icons';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
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
import ReportScreen from "./android/src/screens/ReportScreen";

const AppNavigator = createStackNavigator({
  // Coba: {
  //   screen: App,
  // },

  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',

    }),
  },
  Absen: {
    screen: AbsenScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Absen',
    }),
  },
  Report: {
    screen: ReportScreen,
  },
  BuatIzin: {
    screen: BuatIzinScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Buat surat izin',
    }),
  },
  JenisIzin: {
    screen: JenisIzinScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Jenis Izin',

    }),
  },
  CekIzin: {
    screen: CekIzin,
    navigationOptions: ({ navigation }) => ({
      title: 'Cek Izin',
    }),
  },
  Tabs: createBottomTabNavigator(
    {
      Izin: { screen: ListIzinScreen },
      Absen: { screen: HistoriAbsenScreen },
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'history',
        headerRight: () => (
          <TouchableOpacity
            style={{ width: 40, height: 30, marginRight: 10, borderColor: 'grey', borderWidth: 1 }}
            onPress={() => navigation.navigate("Report")}
            title="Info"
            color="#fff"
          ><Text style={{ alignItems: 'center', fontFamily: 'roboto-regular', fontSize: 18, paddingVertical: 2, alignSelf: 'center' }}>Info</Text></TouchableOpacity>
        ),
      }),
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 25,
        },
        style: {
          backgroundColor: 'white',
        },
      },
    }
  ),
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


