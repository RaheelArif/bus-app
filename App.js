import React, { Component } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from "jwt-decode";
import SocketIoClient from "socket.io-client";
import { baseUrl } from "./src/shared";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/store/store";
import setAuthToken from "./src/utils/setAuthToken";
import { setCurrentUser } from "./src/store/actions/authActions";
import { getMessages } from "./src/store/Epics/UserMsgs";

class App extends Component {
  state = {
    io: null
  };
  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("jwtToken");
      if (value) {
        setAuthToken(value);
        const decoded = jwtDecode(value);
      store.dispatch(getMessages(decoded.id));
        store.dispatch(setCurrentUser(decoded));
      }
    } catch (e) {
      alert("error in reading value");
    }
  };

 async componentDidMount() {
    SplashScreen.hide();
    // AsyncStorage.clear();
    await this.retrieveData();
    const io = SocketIoClient(baseUrl);
    this.setState({ io });
    window.io = io;
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator io={this.state.io} />
      </Provider>
    );
  }
}

export default App;
