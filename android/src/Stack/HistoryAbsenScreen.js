import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
// import CupertinoButtonDelete1 from "../components/CupertinoButtonDelete1";

function HistoryAbsenScreen(props) {
  return (
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
              <Text style={styles.jenisAbsen}>Absen Masuk</Text>
              <Text style={styles.tanggalAbsen}>Senin, 9 Des 2019</Text>
            </View>
            <Text style={styles.waktuAbsen}>12:31</Text>
            <Svg viewBox="0 0 24.60 24.60" style={styles.statusAbsen}>
              <Ellipse
                strokeWidth={1}
                fill="rgba(233,255,17,1)"
                cx={12}
                cy={12}
                rx={12}
                ry={12}
              ></Ellipse>
            </Svg>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  groupBoxWadahAbsen: {
    width: 315,
    height: 75,
    marginTop: 29,
    marginLeft: 30
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
    shadowRadius: 20
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


});

export default HistoryAbsenScreen;