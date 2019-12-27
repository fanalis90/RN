import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
// import CupertinoButtonDelete1 from "./android/src/components/CupertinoButtonDelete1";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header1}>
          <View style={styles.boxHeader}>
            {/* <View style={styles.backButton1Row}>
              <CupertinoButtonDelete1
                button1="Go Back"
                style={styles.backButton1}
              ></CupertinoButtonDelete1>
              <Text style={styles.titleMenu}>Presensi dan Surat Izin</Text>
            </View> */}
            <Text style={styles.subTitle}>Silakan pilih menu yang tersedia</Text>
          </View>
        </View>


        <View style={styles.button3Row}>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Absen")}
            style={styles.button3}
          >
            <View style={styles.rectFiller}></View>
            <View style={styles.rect}>
              <Image
                source={require("../assets/images/absen.png")}
                resizeMode="contain"
                style={styles.iconAbsen}
              ></Image>
              <View style={styles.iconAbsenFiller}></View>
              <Text style={styles.absen}>Absen</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.button3Filler}></View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("JenisIzin")}
            style={styles.button2}
          >
            <View style={styles.rect6Filler}></View>
            <View style={styles.rect6}>
              <Image
                source={require("../assets/images/inbox.png")}
                resizeMode="contain"
                style={styles.iconSuratIzin}
              ></Image>
              <View style={styles.iconSuratIzinFiller}></View>
              <Text style={styles.buatSuratIzin}>Buat Surat Izin</Text>
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.button1Row}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Izin")}
            style={styles.button1}
          >
            <View style={styles.rect3}>
              <Image
                source={require("../assets/images/history.png")}
                resizeMode="contain"
                style={styles.iconHistori}
              ></Image>
              <Text style={styles.histori}>Histori</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.button1Filler}></View>
          <View style={styles.menuPersetujuan1}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CekIzin")}
              style={styles.button1}
            >
              <View style={styles.rect4}>
                <Image
                  source={require("../assets/images/check.png")}
                  resizeMode="contain"
                  style={styles.iconPersetujuan}
                ></Image>
                <Text style={styles.persetujuan}>Persetujuan</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header1: {
    width: 375,
    height: 160,
    marginTop: -10
  },
  boxHeader: {
    width: 375,
    height: 160,
    backgroundColor: "rgba(255,255,255,1)",
    overflow: "visible"
  },
  backButton1: {
    width: 36,
    height: 36
  },
  titleMenu: {
    color: "#121212",
    fontSize: 19,
    fontFamily: "roboto-700",
    marginLeft: 3,
    marginTop: 8
  },
  backButton1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 14,
    marginRight: 125
  },
  subTitle: {
    color: "#c0c0c0",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 50,
    marginLeft: 30,
  },
  button1: {
    width: 146,
    height: 146
  },
  rect3: {
    width: 146,
    height: 146,
    backgroundColor: "rgba(254,241,229,1)",
    borderRadius: 20
  },
  iconHistori: {
    width: 50,
    height: 52,
    marginTop: 48,
    marginLeft: 49
  },
  histori: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 13,
    marginLeft: 1
  },
  button1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  menuPersetujuan1: {
    width: 146,
    height: 146
  },
  rect4: {
    width: 146,
    height: 146,
    backgroundColor: "rgba(254,241,229,1)",
    borderRadius: 20
  },
  iconPersetujuan: {
    width: 50,
    height: 50,
    marginTop: 48,
    marginLeft: 48
  },
  persetujuan: {
    color: "rgba(54,54,54,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 14,
    marginLeft: 1
  },
  button1Row: {
    height: 146,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30
  },
  button3: {
    width: 146,
    height: 146
  },
  rectFiller: {
    flex: 1
  },
  rect: {
    width: 146,
    height: 146,
    backgroundColor: "rgba(254,241,229,1)",
    borderRadius: 20
  },
  iconAbsen: {
    width: 50,
    height: 44,
    marginTop: 45,
    marginLeft: 49
  },
  iconAbsenFiller: {
    flex: 1
  },
  absen: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginBottom: 21,
    marginLeft: 1
  },
  button3Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button2: {
    width: 146,
    height: 146
  },
  rect6Filler: {
    flex: 1
  },
  rect6: {
    width: 146,
    height: 146,
    backgroundColor: "rgba(254,241,229,1)",
    borderRadius: 20
  },
  iconSuratIzin: {
    width: 50,
    height: 52,
    marginTop: 40,
    marginLeft: 48
  },
  iconSuratIzinFiller: {
    flex: 1
  },
  buatSuratIzin: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginBottom: 21,
    marginLeft: 1
  },
  button3Row: {
    height: 146,
    flexDirection: "row",
    marginTop: -30,
    marginLeft: 30,
    marginRight: 30
  }
});
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }
export default HomeScreen;