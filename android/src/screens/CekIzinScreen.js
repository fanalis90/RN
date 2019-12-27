import React, { Component } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
// import listIzin from './src/lisitIzin.json'

class CekIzin extends React.Component {
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignContent: 'center', paddingVertical: '5%', paddingHorizontal: '5%' }}>
          <TouchableOpacity style={styles.TouchableOpacity}
            onPress={this._showModal}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 3, paddingTop: 3 }}>
                <Text style={{ paddingHorizontal: '5%', fontSize: 18, fontFamily: "roboto-700", }} numberOfLines={1}>Ahmad Mu'allal Hifni</Text>
                <Text style={{ paddingHorizontal: '5%', fontSize: 14, fontFamily: "roboto-700", }} numberOfLines={1}>Senin, 9 Desember 2019 - 17:50</Text>
                <View style={styles.izin}>
                  <Text>Izin Sakit</Text>
                </View>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', paddingLeft: '2%' }}>
                <View style={styles.status}>
                  <Text>waiting</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <Modal isVisible={this.state.isModalVisible} style={{ backgroundColor: 'white', borderRadius: 10 }}>
            <View style={{ flex: 1, paddingHorizontal: '5%' }}>
              <View style={{ flex: 1, flexDirection: 'column', paddingVertical: '5%', }}>
                <View style={{ flex: 1, flexDirection: 'row', paddingTop: 20 }}>
                  <View style={{ flex: 1, width: '10%', height: '40%', paddingHorizontal: '5%' }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text numberOfLines={1} style={{ fontSize: 15, fontFamily: 'roboto-700', fontWeight: 'bold' }}>Ahmad Mu'allal Hifni</Text>
                      <View style={styles.izinModal}>
                        <Text>Izin Sakit</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 1, width: '10%', height: '40%', paddingHorizontal: '5%' }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text numberOfLines={1}>Senin, 9 Desember 2019 - 17:50</Text>
                      <View style={styles.statusModal}>
                        <Text>waiting</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                  <View style={{ flex: 1, marginEnd: '5%', alignItems: 'flex-end' }}>
                    <Text>Tanggal Mulai</Text>
                    <Text>12-12-2019</Text>
                  </View>
                  <View style={{ flex: 1, marginStart: '5%', alignItems: 'flex-start' }}>
                    <Text numberOfLines={1}>Tanggal Selesai</Text>
                    <Text style={{}}>19-12-2019</Text>
                  </View>
                </View>

              </View>
              <View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>Perihal</Text>
                  <Text>Subjek/Izin</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>Isi/Keterangan</Text>
                  <Text>isi</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold' }}>Perihal</Text>

                </View>
              </View>
              <View>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Lampiran</Text>
                <View style={{}}>
                  <View style={{ width: 300, height: 35, borderWidth: 1, borderColor: 'orange', borderRadius: 10 }}>
                    <TouchableOpacity style={{ marginRight: 10, marginTop: 4, marginLeft: 230 }}>
                      <Text style={styles.viewLampiran}>view</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
              <View style={{ flex: 1, flexDirection: 'row', paddingTop: 50 }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this._hideModal}>
                  <View style={styles.deny}>
                    <Text>Deny</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={this._hideModal}>
                  <View style={styles.approve}>
                    <Text>Approve</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </Modal>
        </View>

      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'green',
  },
  TouchableOpacity: {
    width: "100%",
    borderRadius: 20,
    height: 100,
    backgroundColor: "rgba(255,255,255,255)",
    shadowColor: "rgba(0,0,0,0)",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 60,
    borderRadius: 15,
    shadowOffset: { height: 10, width: 0 }
  },
  izin: {
    fontSize: 13,
    width: 80,
    height: 30,
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#777E83",
    marginTop: '5%',
    marginStart: '5%',
  },
  status: {
    fontSize: 13,
    width: 60,
    height: 30,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: "#FFAD2F",
    marginTop: '5%',

  },
  izinModal: {
    fontSize: 13,
    width: 80,
    height: 30,
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#777E83",
    marginTop: '5%'
  },
  statusModal: {
    fontSize: 13,
    width: 60,
    height: 30,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: "#FFAD2F",
    marginTop: '5%',

  },
  viewLampiran: {
    fontSize: 15,
    alignItems: 'center',
    fontFamily: 'robot-regular',
    width: 60,
    height: 25,
    borderRadius: 10,
    paddingVertical: 2,
    paddingTop: 2,
    paddingLeft: 15,
    backgroundColor: "#FFAD2F",
  },
  deny: {
    fontSize: 13,
    width: 60,
    height: 30,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: "#f44336",
    marginTop: '2%',
  },
  approve: {
    fontSize: 13,
    width: 100,
    height: 30,
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    backgroundColor: "#4CAF50",
    marginTop: '2%',
  }
});

export default CekIzin;