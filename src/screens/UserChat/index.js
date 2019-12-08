import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { KeyboardAvoidingView, View } from "react-native";
import { connect } from "react-redux";
import { getMsgsSuccess } from "../../store/actions/UserMsgs";
class Chat extends Component {
  // state = {
  //   messages: []
  // };

  // componentWillMount() {
  // }
  static navigationOptions = { title: "Message" };

  componentDidMount() {
    window.io.on("ERROR", err => {
      console.log(err);
      alert(err);
    });
  }
  onSend(messages = []) {
    // const chatBox = chatModel.Chat.find(
    //   box => box.userId === this.props.navigation.getParam("userId")
    // );

    window.io.emit("SENDMSG", { user: this.props.user, messages });
    this.props.dispatch(dis =>
      dis(
        getMsgsSuccess(
          GiftedChat.append(this.props.userMsgs.messages, messages)
        )
      )
    );

    // chatBox.messages = messages;
    // this.setState(previousState => ({
    //   messages: GiftedChat.append(previousState.messages, messages)
    // }));
  }

  render() {
    console.log(this.props);
    return (
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={80}>
        <View style={{ height: "100%" }}>
          <GiftedChat
            messages={this.props.userMsgs.messages}
            onSend={messages => this.onSend(messages)}
            user={this.props.user}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = store =>
  console.log(store) || {
    userMsgs: store.UserMsgs,
    user: store.auth.user
  };
export default connect(mapStateToProps)(Chat);
