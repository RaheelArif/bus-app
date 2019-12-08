import React, { Component } from "react";
import { connect } from "react-redux";
import { View, ImageBackground, Text } from "react-native";
import { Button, Overlay } from "react-native-elements";
import { Drawer } from "native-base";
import DrawerContent from "./DrawerContent";
import { getComments } from "../store/Epics/Comments";

class Home extends Component {
  state = {
    selected: "",
    overlay1: false,
    overlay2: false,
    overlay3: false
  };

  static navigationOptions = {
    header: null
  };
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  componentDidMount() {
    this.props.dispatch(getComments());
  }

  render() {
    return (
      <Drawer
        type="overlay"
        onOpen={this.openDrawer}
        onClose={this.closeDrawer}
        ref={ref => {
          this.drawer = ref;
        }}
        content={<DrawerContent {...this.props} />}
      >
        />
        <ImageBackground
          source={require("../assets/main.png")}
          style={{ width: "100%", height: "100%" }}
          imageStyle={{ opacity: 0.5, resizeMode: "contain" }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          />
          <Button
            onPress={this.openDrawer}
            icon={{
              name: "bars",
              type: "font-awesome",
              color: "#fff",
              size: 30
            }}
            buttonStyle={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "#403E3E"
            }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <Button
              title="Hire"
              onPress={() => {
                this.props.auth.isAuthenticated
                  ? this.setState({ overlay1: true })
                  : this.props.navigation.navigate("Auth");
              }}
              titleStyle={{ fontSize: 20 }}
              buttonStyle={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#403E3E"
              }}
            />
            <Button
              title="School"
              onPress={() => {
                this.setState({ selected: "local" });
                this.props.auth.isAuthenticated
                  ? this.setState({ overlay2: true })
                  : this.props.navigation.navigate("Auth");
              }}
              titleStyle={{ fontSize: 20 }}
              buttonStyle={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#403E3E"
              }}
            />
            <Button
              title="Booking"
              onPress={
                this.props.auth.isAuthenticated
                  ? () => this.props.navigation.navigate("Booking")
                  : () => this.props.navigation.navigate("Auth")
              }
              titleStyle={{ fontSize: 19 }}
              buttonStyle={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#403E3E"
              }}
            />
            <Button
              title="Ticket"
              onPress={
                this.props.auth.isAuthenticated
                  ? () =>
                      this.props.navigation.navigate("Detail", {
                        ride: "Buy Ticket"
                      })
                  : () => this.props.navigation.navigate("Auth")
              }
              titleStyle={{ fontSize: 19 }}
              buttonStyle={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#403E3E"
              }}
            />
            <Overlay
              isVisible={this.state.overlay1}
              overlayBackgroundColor="rgba(255, 255, 255, 0.5)"
              onBackdropPress={() => this.setState({ overlay1: false })}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <Button
                  title="Local"
                  titleStyle={{ fontSize: 30 }}
                  onPress={() =>
                    this.setState({ overlay2: true, selected: "local" })
                  }
                  buttonStyle={{
                    backgroundColor: "#403E3E",
                    width: 200,
                    height: 200,
                    borderRadius: 100
                  }}
                />
                <Button
                  title="Outstation"
                  titleStyle={{ fontSize: 30 }}
                  onPress={() =>
                    this.setState({ overlay2: true, selected: "outstation" })
                  }
                  buttonStyle={{
                    backgroundColor: "#403E3E",
                    width: 200,
                    height: 200,
                    borderRadius: 100
                  }}
                />
              </View>
            </Overlay>
            <Overlay
              isVisible={this.state.overlay2}
              overlayBackgroundColor="rgba(255, 255, 255, 0.7)"
              onBackdropPress={() => this.setState({ overlay2: false })}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <Button
                  title="Bus"
                  titleStyle={{ fontSize: 30 }}
                  buttonStyle={{
                    backgroundColor: "#403E3E",
                    width: 200,
                    height: 200,
                    borderRadius: 100
                  }}
                  onPress={() => {
                    this.setState({ overlay1: false, overlay2: false });
                    this.props.navigation.navigate("Detail", {
                      ride: "Bus",
                      ride: "Rickshaw",
                      local: this.state.selected
                    });
                  }}
                />
                <Button
                  title="Car"
                  titleStyle={{ fontSize: 30 }}
                  buttonStyle={{
                    backgroundColor: "#403E3E",
                    width: 200,
                    height: 200,
                    borderRadius: 100
                  }}
                  onPress={() => {
                    this.setState({ overlay1: false, overlay2: false });
                    this.props.navigation.navigate("Detail", {
                      ride: "Car",
                      local: this.state.selected
                    });
                  }}
                />
                {this.state.selected === "local" ? (
                  <Button
                    title="Rickshaw"
                    titleStyle={{ fontSize: 30 }}
                    buttonStyle={{
                      backgroundColor: "#403E3E",
                      width: 200,
                      height: 200,
                      borderRadius: 100
                    }}
                    onPress={() => {
                      this.setState({ overlay1: false, overlay2: false });
                      this.props.navigation.navigate("Detail", {
                        ride: "Rickshaw",
                        local: this.state.selected
                      });
                    }}
                  />
                ) : null}
              </View>
            </Overlay>
            <Overlay
              isVisible={this.state.overlay3}
              overlayBackgroundColor="rgba(255, 255, 255, 0.5)"
              onBackdropPress={() => this.setState({ overlay3: false })}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }}
              >
                <Button
                  title="Tour"
                  titleStyle={{ fontSize: 30 }}
                  onPress={() => {
                    this.setState({ overlay3: false });
                    this.props.navigation.navigate("Detail");
                  }}
                  buttonStyle={{
                    backgroundColor: "#403E3E",
                    width: 200,
                    height: 200,
                    borderRadius: 100
                  }}
                />
                <Button
                  title="Wedding"
                  titleStyle={{ fontSize: 30 }}
                  onPress={() => {
                    this.setState({ overlay3: false });
                    this.props.navigation.navigate("Detail");
                  }}
                  buttonStyle={{
                    backgroundColor: "#403E3E",
                    width: 200,
                    height: 200,
                    borderRadius: 100
                  }}
                />
                <Button
                  title="Contract"
                  titleStyle={{ fontSize: 30 }}
                  onPress={() => {
                    this.setState({ overlay3: false });
                    this.props.navigation.navigate("Booking");
                  }}
                  buttonStyle={{
                    backgroundColor: "#403E3E",
                    width: 200,
                    height: 200,
                    borderRadius: 100
                  }}
                />
              </View>
            </Overlay>
          </View>
        </ImageBackground>
      </Drawer>
    );
  }
}

const mapStateToProps = store => ({
  auth: store.auth,
  errors: store.errors
});

export default connect(mapStateToProps)(Home);
