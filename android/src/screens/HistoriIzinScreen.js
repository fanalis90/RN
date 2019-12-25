import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import CupertinoButtonDelete1 from "../components/CupertinoButtonDelete1";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollAreaHistoriIzin1}>
        <ScrollView
          contentContainerStyle={
            styles.scrollAreaHistoriIzin1_contentContainerStyle
          }
        >
          <View style={styles.groupBoxTiapAbsen3}>
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
          <View style={styles.groupBoxTiapAbsen2}>
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
          <View style={styles.groupBoxTiapAbsen1}>
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
          <CupertinoButtonDelete
            style={styles.menuPlusButton1}
          ></CupertinoButtonDelete>
        </ScrollView>
      </View>
      <View style={styles.header1}>
        <View style={styles.boxHeader1}>
          <View style={styles.backButton1Row}>
            <CupertinoButtonDelete1
              style={styles.backButton1}
            ></CupertinoButtonDelete1>
            <Text style={styles.titleMenu1}>Histori Izin</Text>
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
  scrollAreaHistoriIzin1: {
    width: 375,
    height: 691,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 121,
    marginLeft: -8
  },
  scrollAreaHistoriIzin1_contentContainerStyle: {
    width: 180,
    height: 190,
    flexDirection: "column"
  },
  groupBoxTiapAbsen3: {
    width: 315,
    height: 75,
    marginTop: 29,
    marginLeft: 38
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
    fontSize: 14,
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
    marginTop: 6,
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
  groupBoxTiapAbsen2: {
    width: 315,
    height: 75,
    marginTop: 15,
    marginLeft: 38
  },
  groupBoxTiapAbsen1: {
    width: 315,
    height: 75,
    marginTop: 15,
    marginLeft: 38
  },
  menuPlusButton1: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(13,155,116,1)",
    borderRadius: 100,
    alignSelf: "flex-end",
    marginTop: 265,
    marginRight: 30
  },
  header1: {
    width: 360,
    height: 121,
    marginTop: -812
  },
  boxHeader1: {
    width: 375,
    height: 121,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 30,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: "visible",
    flexDirection: "row"
  },
  backButton1: {
    width: 36,
    height: 36
  },
  titleMenu1: {
    color: "#121212",
    fontSize: 19,
    fontFamily: "roboto-700",
    marginLeft: 83,
    marginTop: 8
  },
  backButton1Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 148,
    marginLeft: 15,
    marginTop: 68
  }
});

export default Untitled3;
