import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonWhiteTextColor(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>Button</Text>
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
  caption: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "roboto-500"
  }
});

export default CupertinoButtonWhiteTextColor;
