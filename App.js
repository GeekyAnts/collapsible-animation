import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/main.js";
import Eg from "./src/eg.js";

export default class App extends React.Component {
  render() {
    return <Eg />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
