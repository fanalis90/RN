import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, FlatList } from "react-native";
import data from '../json/listIzin.json';

export default class ListIzinScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      izin: data,
    };
  }
  render() {
    return (
      //<View style={styles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={(item, index) => `${index}`}
        extraData={this.state}
        data={this.state.izin}
        renderItem={({ item }) =>
          <View style={styles.groupBoxTiapAbsen}>
            <View style={styles.boxTiapAbsen}>
              <View style={styles.waktuAbsenStack}>
                <Text style={styles.waktuAbsen}></Text>
                <Text style={styles.tanggalAbsen}>
                  {item.tgl}
                </Text>
              </View>
              <View style={styles.jenisAbsenRow}>
                <Text style={styles.jenisAbsen}>{item.jenisIzin}</Text>
                <View style={styles.labelStatusIzin}>
                  <View style={item.status == "waiting" ? styles.boxStatusIzin1 : item.status == "approve" ? styles.boxStatusIzin2 : styles.boxStatusIzin3}>
                    <Text style={styles.statusIzin}>{item.status}</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.keteranganIzin}>{item.keterangan}</Text>
            </View>
          </View>
        }
      />


      //   </View>
    );
  }
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
    marginTop: 15,
    marginHorizontal: '6%'
  },
  boxTiapAbsen: {
    width: '100%',
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
  boxStatusIzin1: {
    width: 67,
    height: 25,
    backgroundColor: "rgba(255,207,60,1)",
    borderRadius: 100,
  },
  boxStatusIzin2: {
    width: 67,
    height: 25,
    backgroundColor: "limegreen",
    borderRadius: 100,
  },
  boxStatusIzin3: {
    width: 67,
    height: 25,
    backgroundColor: "red",
    borderRadius: 100,
  },
  statusIzin: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    paddingTop: 2,
    alignSelf: 'center'
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