import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const userInfo = { username: "admin", password: "root" };
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  _login = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      alert("Logged In");
    } else {
      alert("User or Password is incorrect.");
    }
  };
  render() {
    return (
      <View style={style.container}>
        <Text style={style.text_header}>Welcome!</Text>
        <View style={style.footer}>
          <Text style={[style.text_title, { marginTop: 40 }]}>E-mail</Text>
          <View style={style.box_input}>
            <Icon name="user-o" style={style.icon} />
            <TextInput
              placeholder="Your email"
              style={style.text_input}
              keyboardType="email-address"
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <Text style={[style.text_title, { marginTop: 20 }]}>Password</Text>
          <View style={style.box_input}>
            <Icon name="lock" style={style.icon} />
            <TextInput
              placeholder="Your password"
              style={style.text_input}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity onPress={this._login}>
            <View style={style.button}>
              <Text style={style.text_login}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={style.text_signUp}>
            <Text>Do you have a account?</Text>
            <Text style={{ color: "blue" }}> Sign up?</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgb(94, 111, 238)",
  },
  text_header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  footer: {
    width: "100%",
    height: "75%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  box_input: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  icon: {
    color: "#05375a",
    fontSize: 20,
    paddingTop: 10,
  },
  text_input: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    color: "gray",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(94, 111, 238)",
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 100,
  },
  text_login: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  text_signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
