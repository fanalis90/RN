import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function CupertinoButtonDelete2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="my-location" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    color: "#000",
    fontSize: 20,
    fontFamily: "Roboto",
    alignSelf: "center"
  }
});

export default CupertinoButtonDelete2;
