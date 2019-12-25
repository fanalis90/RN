import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from 'react-native-vector-icons';


class BuatIzinScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxInputanKepada}>
          <Text style={styles.labelKepada}>Kepada</Text>
          <View style={styles.rect1}>
            <TextInput
              placeholder="Nama Atasan Yang dituju"
              placeholderTextColor="rgba(202,202,202,1)"
              defaultValue=""
              textBreakStrategy="simple"
              clearButtonMode="never"
              style={styles.inputanKepada}
            ></TextInput>
          </View>
        </View>

        <View style={styles.boxInputanPerihal}>
          <Text style={styles.labelPerihal}>Perihal</Text>
          <View style={styles.rect2}>
            <TextInput
              placeholder="Peruhal surat / Subject"
              placeholderTextColor="rgba(202,202,202,1)"
              style={styles.inputanPerihal}
            ></TextInput>
          </View>
        </View>


        <View style={styles.boxInputanIsi}>
          <Text style={styles.labelIsi}>Isi</Text>
          <View style={styles.rect3}>
            <TextInput
              placeholder="Tuliskan isi dari surat anda disini"
              placeholderTextColor="rgba(202,202,202,1)"
              numberOfLines={5}
              dataDetector="address"
              style={styles.inputanIsi}
            ></TextInput>
          </View>
        </View>





        <View style={styles.tanggalMulaiRow}>
          <TouchableOpacity style={styles.tanggalMulai}>
            <View style={styles.rect4}>
              <MaterialCommunityIconsIcon
                name="calendar-multiselect"
                style={styles.icon2}
              ></MaterialCommunityIconsIcon>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tanggalSelesai}>
            <View style={styles.rect6}>
              <MaterialCommunityIconsIcon
                name="calendar-multiselect"
                style={styles.icon3}
              ></MaterialCommunityIconsIcon>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.labelTanggalMulaiRow}>
          <Text style={styles.labelTanggalMulai}>Tanggal Mulai</Text>
          <Text style={styles.labelTanggalSelesai}>Tanggal Selesai</Text>
        </View>


        <View style={styles.boxFileAttachment}>
          <Text style={styles.labelSuratKeteranganDokter}>
            Surat Keterangan Dokter
        </Text>
          <TouchableOpacity>
            <View style={styles.attachmentIconStack}>
              <View style={styles.rect5}></View>
              <MaterialCommunityIconsIcon
                name="attachment"
                style={styles.attachment}
              ></MaterialCommunityIconsIcon>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submitIzinKeAdmin}>
          <View style={styles.rect7}>
            <Text style={styles.submit}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  boxInputanKepada: {
    width: 315,
    height: 78,
  },
  labelKepada: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  inputanKepada: {
    width: 280,
    height: 49,
    color: "#121212",
    fontFamily: "roboto-regular"
  },
  rect1: {
    width: 315,
    height: 50,
    borderRadius: 15,
    borderColor: "rgba(234,234,234,1)",
    borderWidth: 2,
  },
  boxInputanPerihal: {
    width: 315,
    height: 78,
  },
  labelPerihal: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  rect2: {
    width: 315,
    height: 50,
    borderRadius: 15,
    borderColor: "rgba(234,234,234,1)",
    borderWidth: 2,
  },
  inputanPerihal: {
    width: 283,
    height: 50,
    color: "#121212",
    fontFamily: "roboto-regular",

  },
  boxInputanIsi: {
    width: 315,
    height: 152,
  },
  labelIsi: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  inputanIsi: {
    width: 283,
    height: 122,
    color: "#121212",
    fontFamily: "roboto-regular",

  },
  rect3: {
    width: 315,
    height: 122,
    borderRadius: 15,
    borderColor: "rgba(234,234,234,1)",
    borderWidth: 2,
  },
  tanggalMulai: {
    width: 120,
    height: 50,
    justifyContent: "center"
  },
  rect4: {
    width: 120,
    height: 50,
    borderRadius: 15,
    borderColor: "rgba(234,234,234,1)",
    borderWidth: 2,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(236,103,103,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginTop: 10,
    marginLeft: 45
  },
  tanggalSelesai: {
    width: 120,
    height: 50,
    marginLeft: 45
  },
  rect6: {
    width: 120,
    height: 50,
    borderRadius: 15,
    borderColor: "rgba(234,234,234,1)",
    borderWidth: 2
  },
  icon3: {
    color: "rgba(80,188,71,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginTop: 10,
    marginLeft: 45
  },
  tanggalMulaiRow: {
    height: 50,
    flexDirection: "row",
    marginLeft: 45,
    marginRight: 45
  },
  labelTanggalMulai: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  labelTanggalSelesai: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginLeft: 59
  },
  labelTanggalMulaiRow: {
    height: 30,
    flexDirection: "row",
    marginLeft: 54,
    marginRight: 50
  },
  boxFileAttachment: {
    width: 315,
    height: 79,
  },
  labelSuratKeteranganDokter: {
    color: "rgba(54,54,54,1)",
    fontSize: 16,
    fontFamily: "roboto-regular"
  },
  attachmentIcon: {
    top: 15,
    left: 25,
    position: "absolute",
    color: "rgba(153,153,153,1)",
    fontSize: 20
  },
  rect5: {
    top: 0,
    left: 0,
    width: 315,
    height: 50,
    position: "absolute",
    borderRadius: 15,
    borderColor: "rgba(234,234,234,1)",
    borderWidth: 2
  },
  attachmentIconStack: {
    width: 315,
    height: 50,
  },
  submitIzinKeAdmin: {
    width: 315,
    height: 50,
  },
  rect7: {
    width: 315,
    height: 50,
    borderRadius: 15,
    borderColor: "rgba(234,234,234,1)",
    borderWidth: 2,
    backgroundColor: '#555555'
  },
  submit: {
    color: "white",
    fontSize: 25,
    fontFamily: "roboto-700",
    textAlign: "center",
    marginVertical: 3
  },
  attachment: {
    color: "rgba(80,188,71,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 10,
    marginTop: 5
  }


})

export default BuatIzinScreen;