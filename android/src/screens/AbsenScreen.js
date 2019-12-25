import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Text, Image, ToastAndroid } from "react-native";
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'absen',
  },
};


class AbsenScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Absen',
      headerTintColor: 'black',
    };
  };


  state = {
    pickedImage: null,
    source: null,
  }

  reset = () => {
    this.setState({
      pickedImage: null
    });
  }

  /**
 * The first arg is the options object for customization (it can also be null or omitted for default options),
 * The second arg is the callback which sends object: response (more info below in README)
 */

  pickImageHandler = () => {
    ImagePicker.launchCamera(options, (res) => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        const pickedImage = { uri: res.uri };
        this.setState({
          avatarSource: pickedImage,

        });

      }
    });
  }

  resetHandler = () => {
    this.reset();
  }


  scanFingerPrint = () => {
    alert('taro fungsi Scan disini')
  }

  submit = () => {
    alert('taro fungsi Submit disini')
  }





  render() {
    const { photo, show } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subContainerAtas}>
          <Text style={styles.headingText}>Silahkan lengkapi data dibawah ini</Text>

          {/* <Image source={this.state.avatarSource} style={styles.iniDigantiKomponenMap} /> */}

          <MapView
            style={styles.iniDigantiKomponenMap}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: -7.784794,
              longitude: 110.394241,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          />



        </View>
        <View style={styles.subContainerBawah}>
          <TouchableOpacity style={styles.buttonGray} onPress={this.pickImageHandler}>
            <Text>Ambil Foto Selfie</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGray} onPress={() => this.scanFingerPrint}>
            <Text>Scan Fingerprint</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBlack} onPress={() => this.submit}>
            <Text style={{ color: 'white' }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainerAtas: {
    flex: 2,
    marginHorizontal: '5%',
  },
  subContainerBawah: {
    flex: 1,
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headingText: {
    marginVertical: 15,
    fontSize: 15,
    color: 'gray'
  },
  buttonGray: {
    width: '100%',
    height: 50,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBlack: {
    width: '100%',
    height: 50,
    marginBottom: 5,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iniDigantiKomponenMap: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    // backgroundColor: 'gray'
  }
});

export default AbsenScreen;
