import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>ProfileScreen</Text>
        <Text style={style.text}>
          Welcome, {this.props.navigation.getParam("username")}
        </Text>
        <Button
          title="Sign Out"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
