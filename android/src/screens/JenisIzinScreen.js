import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";


function JenisIzinScreen(props) {
  return (

    <View style={styles.container}>
      <View style={styles.headerStack}>
        <View style={styles.header}>
          <Text style={styles.subTitle1}>Pilih jenis surat izin</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BuatIzin")}
        style={styles.button2}>
        <View style={styles.rect1}>
          <Text style={styles.suratIzinCutiTahunan}>
            Surat Izin Cuti Tahunan
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BuatIzin")}
        style={styles.button3}
      >
        <View style={styles.rect2}>
          <Text style={styles.suratIzinCutiBesar}>Surat Izin Cuti Besar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BuatIzin")}
        style={styles.button4}
      >
        <View style={styles.rect3}>
          <Text style={styles.suratIzinSakit}>Surat Izin Sakit</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BuatIzin")}
        style={styles.button5}
      >
        <View style={styles.rect4}>
          <Text style={styles.suratIzinCutiBersalin}>
            Surat Izin Cuti Bersalin
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BuatIzin")}
        style={styles.button6}
      >
        <View style={styles.rect5}>
          <Text style={styles.suratIzinKareaAlasanPenting}>
            Surat Izin Karena Alasan Penting
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BuatIzin")}
        style={styles.button7}
      >
        <View style={styles.rect6}>
          <Text style={styles.suratIzinCutidiluarTanggungan}>
            Surat Izin Cuti diluar Tanggungan N
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button2: {
    width: 315,
    height: 50,
    marginTop: 10,
    marginLeft: 30
  },
  rect1: {
    width: 315,
    height: 50,
    backgroundColor: "#e7e7e7",
    borderRadius: 15
  },
  suratIzinCutiTahunan: {
    color: "rgba(80,80,80,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 20
  },
  button3: {
    width: 315,
    height: 50,
    marginTop: 10,
    marginLeft: 30
  },
  rect2: {
    width: 315,
    height: 50,
    backgroundColor: "#e7e7e7",
    borderRadius: 15
  },
  suratIzinCutiBesar: {
    color: "rgba(80,80,80,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 20
  },
  button4: {
    width: 315,
    height: 50,
    marginTop: 10,
    marginLeft: 30
  },
  rect3: {
    width: 315,
    height: 50,
    backgroundColor: "#e7e7e7",
    borderRadius: 15
  },
  suratIzinSakit: {
    color: "rgba(80,80,80,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 20
  },
  button5: {
    width: 315,
    height: 50,
    marginTop: 10,
    marginLeft: 30
  },
  rect4: {
    width: 315,
    height: 50,
    backgroundColor: "#e7e7e7",
    borderRadius: 15
  },
  suratIzinCutiBersalin: {
    color: "rgba(80,80,80,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 20
  },
  button6: {
    width: 315,
    height: 50,
    marginTop: 10,
    marginLeft: 30
  },
  rect5: {
    width: 315,
    height: 50,
    backgroundColor: "#e7e7e7",
    borderRadius: 15
  },
  suratIzinKareaAlasanPenting: {
    color: "rgba(80,80,80,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 20
  },
  button7: {
    width: 315,
    height: 50,
    marginTop: 10,
    marginLeft: 30
  },
  rect6: {
    width: 315,
    height: 50,
    backgroundColor: "#e7e7e7",
    borderRadius: 15
  },
  suratIzinCutidiluarTanggungan: {
    color: "rgba(80,80,80,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 17,
    marginLeft: 20
  },
  header: {
    top: 8,
    left: 15,
    width: 147,
    height: 60,
    position: "absolute"
  },
  titleMenu1: {
    color: "#121212",
    fontSize: 19,
    fontFamily: "roboto-700",
    marginLeft: 23
  },
  subTitle1: {
    color: "#c0c0c0",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 25
  },
  backButton: {
    top: 0,
    left: 0,
    width: 36,
    height: 36,
    position: "absolute"
  },
  headerStack: {
    width: 162,
    height: 68,
    marginTop: 10,
    marginLeft: 15
  }
});

export default JenisIzinScreen;