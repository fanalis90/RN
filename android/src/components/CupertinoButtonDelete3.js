import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

function CupertinoButtonDelete3(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="settings" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  icon: {
    color: "#000",
    fontSize: 24,
    fontFamily: "Roboto",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  }
});

export default CupertinoButtonDelete3;
