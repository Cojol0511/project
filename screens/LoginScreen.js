import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Google from "expo-google-app-auth";

const ANDROID_CLIENT_ID = "AIzaSyBI3jcyrx6ctJ41CVtVjXaWMRy0tQosHfQ";

const userInfo = { username: "admin", password: "root" };

//expo doc
async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId:
        "544097032846-7j703hs6kqpk98vr16ol1hri6oia031j.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      user: null,
    };
  }

  //test no data
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

  //wite hand
  signInWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "544097032846-7j703hs6kqpk98vr16ol1hri6oia031j.apps.googleusercontent.com",
        success: ["profile", "email"],
      });

      if (result.type === "success") {
        console.log("LoginScreen.js", result.user.givenName);
        this.props.navigation.navigate("Profile", {
          username: result.user.givenName,
        }); //after Google login redirect to Profile
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      console.log("LoginScreen.js", error);
      return { error: true };
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
          <TouchableOpacity style={style.area_forgot}>
            <Text style={{ color: "rgb(94, 111, 238)" }}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
          <View style={style.area_FB_GG}>
            <TouchableOpacity
              style={[style.button_FB_GG, { backgroundColor: "#4267B2" }]}
            >
              <Icon name="facebook-official" style={style.icon_FB_GG} />
              <Text style={style.text_FB_GG}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.button_FB_GG, { backgroundColor: "red" }]}
              onPress={this.signInWithGoogle}
            >
              <Icon name="google-plus" style={style.icon_FB_GG} />
              <Text style={style.text_FB_GG}>Google Plus</Text>
            </TouchableOpacity>
          </View>
          <View style={style.text_signUp}>
            <Text>Don't you have an account?</Text>
            <TouchableOpacity>
              <Text style={{ color: "blue" }}> Sign up</Text>
            </TouchableOpacity>
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
  area_forgot: {
    margin: 40,
    alignItems: "center",
  },
  text_signUp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  area_FB_GG: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button_FB_GG: {
    width: "49%",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 999,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text_FB_GG: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    paddingHorizontal: 15,
  },
  icon_FB_GG: {
    color: "white",
    fontSize: 22,
  },
});
