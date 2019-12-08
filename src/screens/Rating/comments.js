import React from "react";
import { Card } from "react-native-elements";
import {
  FlatList,
  Text,
  View,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";

renderComments = ({ item, key }) => (
  <View key={key}>
    <Text style={{ fontSize: 14 }}>{item.comment}</Text>
    <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
    <Text style={{ fontSize: 12 }}>
      {"-- " + item.user + ", " + item.date}{" "}
    </Text>
  </View>
);

const Comments = props => {
  if (props.Comments.isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
  if (props.Comments.errMess) {
    return (
      <View>
        <Text>{props.Comments.errMess}</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={{ marginBottom: 10 }}>
        <Card title="Comments">
          <FlatList
            style={{ marginLeft: 10 }}
            data={props.Comments.comments}
            renderItem={this.renderComments}
            keyExtractor={item => item._id.toString()}
          />
        </Card>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = store => ({
  Comments: store.Comments
});
export default connect(mapStateToProps)(Comments);
