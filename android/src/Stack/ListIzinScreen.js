import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

function ListIzinScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.groupBoxTiapAbsen}>
        <View style={styles.boxTiapAbsen}>
          <View style={styles.waktuAbsenStack}>
            <Text style={styles.waktuAbsen}></Text>
            <Text style={styles.tanggalAbsen}>
              Senin, 9 Desember 2019 - 17:50
                </Text>
          </View>
          <View style={styles.jenisAbsenRow}>
            <Text style={styles.jenisAbsen}>Izin Sakit</Text>
            <View style={styles.labelStatusIzin}>
              <View style={styles.boxStatusIzin}>
                <Text style={styles.statusIzin}>waiting</Text>
              </View>
            </View>
          </View>
          <Text style={styles.keteranganIzin}>
            keterangan, kenapa kamu izin...
              </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollAreaHistoriIzin: {
    width: 375,
    height: 691,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 121
  },
  scrollAreaHistoriIzin_contentContainerStyle: {
    width: 180,
    height: 190,
    flexDirection: "column"
  },
  groupBoxTiapAbsen: {
    width: 315,
    height: 75,
    marginTop: 29,
    marginLeft: 30
  },
  boxTiapAbsen: {
    width: 315,
    height: 75,
    backgroundColor: "rgba(255,255,255,1)",
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
  waktuAbsen: {
    top: 0,
    left: 120,
    color: "#c0c0c0",
    position: "absolute",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  tanggalAbsen: {
    top: 0,
    left: 0,
    color: "#c0c0c0",
    position: "absolute",
    fontSize: 13,
    fontFamily: "roboto-regular"
  },
  waktuAbsenStack: {
    width: 196,
    height: 14,
    marginTop: 9,
    marginLeft: 20
  },
  jenisAbsen: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    marginTop: 5
  },
  labelStatusIzin: {
    width: 67,
    height: 25,
    marginLeft: 153
  },
  boxStatusIzin: {
    width: 67,
    height: 25,
    backgroundColor: "rgba(255,207,60,1)",
    borderRadius: 100
  },
  statusIzin: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    marginTop: 3,
    marginLeft: 10
  },
  jenisAbsenRow: {
    height: 25,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 20,
    marginRight: 8
  },
  keteranganIzin: {
    color: "#c0c0c0",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginTop: 4,
    marginLeft: 20
  },

  menuPlusButton: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(13,155,116,1)",
    borderRadius: 100,
    alignSelf: "flex-end",
    marginTop: 350,
    marginRight: 30
  },
  backButton1Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 141,
    marginLeft: 15,
    marginTop: 68
  }
});

export default ListIzinScreen;