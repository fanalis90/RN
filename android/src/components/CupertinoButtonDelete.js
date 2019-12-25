import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoButtonDelete(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="ios-add" style={styles.icon}></Icon>
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
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "Roboto",
    width: 12,
    height: 24
  }
});

export default CupertinoButtonDelete;
