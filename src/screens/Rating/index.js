import React from "react";
import { Input, Rating, Button } from "react-native-elements";
import { View, Modal, StyleSheet } from "react-native";
import { submitComment } from "../../store/Epics/Comments";
import { connect } from "react-redux";
import Comments from './comments'

class RatingModal extends React.Component {
  state = {
    comment: "",
    rating: 0
  };
  render() {
    return (
      <Modal
        visible={this.props.showModal}
        transparent={false}
        animationType="slide"
        onDismiss={this.props.toggleModal}
        onRequestClose={this.props.toggleModal}
      >
        <View style={styles.modalContainer}>
          <Rating
            showRating
            startingValue={0}
            fractions={1}
            onFinishRating={rating => this.setState({ rating })}
          />
          <Input
            onChangeText={comment => this.setState({ comment })}
            leftIconContainerStyle={styles.leftIconContainerStyle}
            inputContainerStyle={styles.inputContainer}
            leftIcon={{ name: "comments", type: "font-awesome" }}
            placeholder="Comment"
          />
          <Button
            buttonStyle={{ backgroundColor: "#512DA8" }}
            title="Submit"
            onPress={() => {
              submitComment({
                rating: this.state.rating,
                comment: this.state.comment,
                userId: this.props.auth.user.id
              });
              this.props.toggleModal();
            }}
            containerStyle={styles.inputContainer}
          />
          <Button
            title="Cancel"
            onPress={this.props.toggleModal}
            containerStyle={styles.inputContainer}
          />
          <Comments />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 5,
    marginTop: 10
  },
  inputContainer: {
    marginTop: 10
  },
  leftIconContainerStyle: {
    marginRight: 5
  }
});
const mapStateToProps = store => ({
  auth: store.auth,
  Comments: store.comments
});
export default connect(mapStateToProps)(RatingModal);
