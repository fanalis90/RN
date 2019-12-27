import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Text, FlatList } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
// import CupertinoButtonDelete1 from "../components/CupertinoButtonDelete1";
import data from '../json/listAbsen.json';

export default class HistoryAbsenScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      izin: data,
    };
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={(item, index) => `${index}`}
        extraData={this.state}
        data={this.state.izin}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <View style={styles.groupBoxWadahAbsen}>
              <View style={styles.boxTiapAbsen}>
                <View style={styles.profilePictureRow}>
                  <Image
                    source={require("../assets/images/ProfilePicture.jpg")}
                    resizeMode="contain"
                    style={styles.profilePicture}
                  ></Image>
                  <View style={styles.jenisAbsenColumn}>
                    <Text style={styles.jenisAbsen}>{item.jenisAbsen}</Text>
                    <Text style={styles.tanggalAbsen}>{item.tgl}</Text>
                  </View>
                  <View >
                    <Text style={styles.waktuAbsen}>{item.jam}</Text>
                    <Svg viewBox="0 0 24.60 24.60" style={styles.statusAbsen}>
                      <View style={item.status == "waiting" ? styles.eclips1 : item.status == "approve" ? styles.eclips2 : styles.eclips3}></View>
                    </Svg>
                  </View>


                </View>
              </View>
            </View>
          </View>
        }
      />
    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  groupBoxWadahAbsen: {
    width: 315,
    height: 75,
    marginTop: 15,
    marginHorizontal: '6%'
  },
  boxTiapAbsen: {
    width: 315,
    height: 75,
    backgroundColor: "white",
    elevation: 60,
    borderRadius: 15,
    shadowOffset: {
      height: 10,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 20,

  },
  profilePicture: {
    width: 56,
    height: 56,
    borderRadius: 9
  },
  jenisAbsen: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-700"
  },
  tanggalAbsen: {
    color: "#c0c0c0",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  jenisAbsenColumn: {
    width: 127,
    marginLeft: 14,
    marginTop: 14,
    marginBottom: 10
  },
  waktuAbsen: {
    color: "#c0c0c0",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginLeft: 33,
    marginTop: 22
  },
  styleView: {
    marginLeft: 33,
    marginTop: 22
  },
  statusAbsen: {
    width: 25,
    height: 25,
    marginLeft: 7,
    marginTop: 16
  },
  profilePictureRow: {
    height: 56,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 8
  },
  eclips1: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'yellow',
    marginLeft: 1,
    marginLeft: 60,
    marginTop: -41
  },
  eclips2: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'limegreen',
    marginLeft: 1,
    marginLeft: 60,
    marginTop: -41
  },
  eclips3: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    marginLeft: 1,
    marginLeft: 60,
    marginTop: -41
  },


});