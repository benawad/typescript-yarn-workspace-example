import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { add } from "@cashew/common";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{add(1, 2)}</Text>
      </View>
    );
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
