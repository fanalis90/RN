import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function CupertinoSearchBarBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.inputBox}>
        <Icon name="magnify" style={styles.inputLeftIcon}></Icon>
        <TextInput
          placeholder={props.textInput1 || "Search"}
          style={styles.inputStyle}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CECED2",
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  inputBox: {
    flex: 1,
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  inputLeftIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 32,
    flex: 1,
    color: "#000",
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 15
  }
});

export default CupertinoSearchBarBasic;
