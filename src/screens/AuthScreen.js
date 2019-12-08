import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Input, Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

import { loginUser, registerUser } from "../store/actions/authActions";

class AuthScreen extends Component {
  state = {
    authMode: "signin",
    name: "",
    email: "",
    phone: "",
    password: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate("Home");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.auth.register._id) {
      this.setState({ authMode: "signin" });
    }
  }

  handleSignup = () => {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    };
    this.props.registerUser(newUser);
  };

  handleSignin = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  swithAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === "signin" ? "signup" : "signin"
      };
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ padding: 30 }}>
          <Text h1 style={{ textAlign: "center", marginBottom: 30 }}>
            {this.state.authMode === "signin" ? "Sign In" : "Sign Up"}
          </Text>
          {this.state.authMode === "signup" ? (
            <Input
              placeholder='User Name'
              containerStyle={{ marginBottom: 30 }}
              leftIcon={<Icon name='user' size={30} color='black' />}
              leftIconContainerStyle={{ marginRight: 30 }}
              onChangeText={text => this.setState({ name: text })}
              errorMessage={errors.name && errors.name}
            />
          ) : null}
          <Input
            placeholder='Email'
            containerStyle={{ marginBottom: 30 }}
            leftIcon={<Icon name='envelope' size={30} color='black' />}
            leftIconContainerStyle={{ marginRight: 30 }}
            onChangeText={text => this.setState({ email: text })}
            errorMessage={errors.email && errors.email}
          />
          {this.state.authMode === "signup" ? (
            <Input
              placeholder='Phone Number'
              containerStyle={{ marginBottom: 30 }}
              leftIcon={<Icon name='phone' size={30} color='black' />}
              leftIconContainerStyle={{ marginRight: 30 }}
              onChangeText={text => this.setState({ phone: text })}
              errorMessage={errors.phone && errors.phone}
            />
          ) : null}
          <Input
            placeholder='Password'
            containerStyle={{ marginBottom: 30 }}
            leftIcon={<Icon name='key' size={30} color='black' />}
            leftIconContainerStyle={{ marginRight: 30 }}
            onChangeText={text => this.setState({ password: text })}
            errorMessage={errors.password && errors.password}
          />
          <Button
            title={this.state.authMode === "signin" ? "Sign In" : "Sign Up"}
            buttonStyle={{ backgroundColor: "#403E3E", marginBottom: 30 }}
            onPress={
              this.state.authMode === "signin"
                ? this.handleSignin
                : this.handleSignup
            }
          />
          <Button
            title={`Switch to ${
              this.state.authMode === "signin" ? "Sign Up" : "Sign In"
            }`}
            buttonStyle={{ backgroundColor: "#403E3E" }}
            onPress={this.swithAuthModeHandler}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = store => ({
  auth: store.auth,
  errors: store.errors
});

export default connect(
  mapStateToProps,
  { loginUser, registerUser }
)(AuthScreen);
