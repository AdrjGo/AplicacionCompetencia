import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function Buttons(props) {
    const { text } = props

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.touchButton, backgroundColor: "#0a0a0a" }}>
        <Text style={styles.buttonText}>{ text }</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1a1a1a",
      },
  touchButton: {
    width: "90%",
    alignSelf: "center",
    paddingVertical: 10,
    marginVertical:10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#f1f1f1",
    textAlign: "left",
    fontSize: 18,
  },
});
