import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import RatingModal from "./Rating/index";

class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    return (
      <View>
        <View
          style={{ width: "100%", height: 150, backgroundColor: "black" }}
        />
        <ListItem
          chevron
          onPress={() => this.props.navigation.navigate("UserChat")}
          title="Messages"
        />
        <ListItem chevron onPress={this.toggleModal} title="Rate Us" />
        <RatingModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
      </View>
    );
  }
}

export default DrawerContent;
