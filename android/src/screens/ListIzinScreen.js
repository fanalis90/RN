import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
// import CupertinoButtonDelete1 from "./android/src/components/CupertinoButtonDelete1";
// import CupertinoSearchBarBasic from "./android/src/components/CupertinoSearchBarBasic";

class ListIzinScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.groupBoxWadahListIzinPegawai1}>
          <View style={styles.boxTiapAbsen}>
            <Text style={styles.namaPegawaiYgIzin}>Nama Pegawainya</Text>
            <View style={styles.tanggalWaktuAbsenColumnRow}>
              <View style={styles.tanggalWaktuAbsenColumn}>
                <Text style={styles.tanggalWaktuAbsen}>
                  Senin, 9 Desember 2019 - 17:50
              </Text>
                <View style={styles.statusIzinLagiApa}>
                  <View style={styles.boxStatusIzin}>
                    <Text style={styles.statusIzin}>izin sakit</Text>
                  </View>
                </View>
              </View>
              <View style={styles.labelStatusIzin}>
                <View style={styles.boxStatusIzin}>
                  <Text style={styles.statusIzin}>waiting</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupBoxWadahListIzinPegawai2}>
          <View style={styles.boxTiapAbsen}>
            <Text style={styles.namaPegawaiYgIzin}>Nama Pegawainya</Text>
            <View style={styles.tanggalWaktuAbsenColumnRow}>
              <View style={styles.tanggalWaktuAbsenColumn}>
                <Text style={styles.tanggalWaktuAbsen}>
                  Senin, 9 Desember 2019 - 17:50
              </Text>
                <View style={styles.statusIzinLagiApa}>
                  <View style={styles.boxStatusIzin}>
                    <Text style={styles.statusIzin}>izin sakit</Text>
                  </View>
                </View>
              </View>
              <View style={styles.labelStatusIzin}>
                <View style={styles.boxStatusIzin}>
                  <Text style={styles.statusIzin}>waiting</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupBoxWadahListIzinPegawai3}>
          <View style={styles.boxTiapAbsen}>
            <Text style={styles.namaPegawaiYgIzin}>Nama Pegawainya</Text>
            <View style={styles.tanggalWaktuAbsenColumnRow}>
              <View style={styles.tanggalWaktuAbsenColumn}>
                <Text style={styles.tanggalWaktuAbsen}>
                  Senin, 9 Desember 2019 - 17:50
              </Text>
                <View style={styles.statusIzinLagiApa}>
                  <View style={styles.boxStatusIzin}>
                    <Text style={styles.statusIzin}>izin sakit</Text>
                  </View>
                </View>
              </View>
              <View style={styles.labelStatusIzin}>
                <View style={styles.boxStatusIzin}>
                  <Text style={styles.statusIzin}>waiting</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.header1}>
          {/* <View style={styles.boxHeader1}>
            <View style={styles.backButton1Row}>
              <CupertinoButtonDelete1
                style={styles.backButton1}
              ></CupertinoButtonDelete1>
              <Text style={styles.titleMenu1}>List Izin Pegawai</Text>
            </View>
            <CupertinoSearchBarBasic
              textInput1=""
              style={styles.filterSearch1}
            ></CupertinoSearchBarBasic>
          </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  groupBoxWadahListIzinPegawai1: {
    width: 315,
    height: 90,
    marginTop: 190,
    marginLeft: 30
  },
  boxTiapAbsen: {
    width: 315,
    height: 90,
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
  namaPegawaiYgIzin: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    marginTop: 13,
    marginLeft: 20
  },
  tanggalWaktuAbsen: {
    color: "#c0c0c0",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  statusIzinLagiApa: {
    width: 95,
    height: 25,
    marginTop: 5
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
  tanggalWaktuAbsenColumn: {
    width: 196,
    marginTop: 1
  },
  labelStatusIzin: {
    width: 67,
    height: 25,
    marginLeft: 24
  },
  tanggalWaktuAbsenColumnRow: {
    height: 45,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 20,
    marginRight: 8
  },
  groupBoxWadahListIzinPegawai2: {
    width: 315,
    height: 90,
    marginTop: 20,
    marginLeft: 30
  },
  groupBoxWadahListIzinPegawai3: {
    width: 315,
    height: 90,
    marginTop: 16,
    marginLeft: 30
  },
  header1: {
    width: 375,
    height: 170,
    marginTop: -499
  },
  boxHeader1: {
    width: 375,
    height: 170,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 30,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    overflow: "visible"
  },
  backButton1: {
    width: 36,
    height: 36
  },
  titleMenu1: {
    color: "#121212",
    fontSize: 19,
    fontFamily: "roboto-700",
    marginLeft: 67,
    marginTop: 10
  },
  backButton1Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 70,
    marginLeft: 12,
    marginRight: 115
  },
  filterSearch1: {
    width: 288,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 12,
    marginLeft: 29
  }
});

export default ListIzinScreen;
