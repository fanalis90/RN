import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, ScrollView, TouchableOpacity } from "react-native";



function ReportScreen(props) {
  return (

    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', paddingTop: 10, flex: 1, paddingBottom: 20 }}>
        <Image style={{ width: 125, height: 125, borderRadius: 70, marginVertical: 10 }}
          source={require("../assets/images/ProfilePicture.jpg")}
        >
        </Image>
        <Text style={{ fontSize: 20 }}>Ahmad Mu'allal Hifni</Text>
        <Text>Jabatan : Dosen</Text>

      </View>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 100 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-end', marginEnd: '3%', marginBottom: '2%' }}>
            <TouchableOpacity style={styles.bayangan}>
              <Text style={{ fontSize: 50 }}>126</Text>
              <Text style={{ fontSize: 12 }}>Total Seluruh Absensi</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-start', marginStart: '3%', marginBottom: '2%' }}>
            <TouchableOpacity style={styles.bayangan}>
              <Text style={{ fontSize: 50 }}>69</Text>
              <Text style={{ fontSize: 12 }}>Absensi Bulan ini</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-end', marginEnd: '3%', marginBottom: '2%' }}>
            <TouchableOpacity style={styles.bayangan2}>
              <Text style={{ fontSize: 20 }}>69</Text>
              <Text style={{ fontSize: 12 }}>Terlambat</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-start', marginStart: '3%', marginBottom: '2%' }}>
            <TouchableOpacity style={styles.bayangan2}>
              <Text style={{ fontSize: 20 }}>69</Text>
              <Text style={{ fontSize: 12 }}>Cuti</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, alignItems: 'flex-end', marginEnd: '3%' }}>
            <TouchableOpacity style={styles.bayangan2}>
              <Text style={{ fontSize: 20 }}>69</Text>
              <Text style={{ fontSize: 12 }}>Izin</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-start', marginStart: '3%' }}>
            <TouchableOpacity style={styles.bayangan2}>
              <Text style={{ fontSize: 20 }}>69</Text>
              <Text style={{ fontSize: 12 }}>Sakit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bayangan: {
    width: 150, height: 120,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: "rgba(255,255,255,255)",
    shadowColor: "rgba(0,0,0,0)",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 60,
    borderRadius: 15,
    shadowOffset: { height: 10, width: 0 }
  },
  bayangan2: {
    width: 120, height: 60,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: "rgba(255,255,255,255)",
    shadowColor: "rgba(0,0,0,0)",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 60,
    borderRadius: 15,
    shadowOffset: {
      height: 10,
      width: 0
    }
  }
});

export default ReportScreen;