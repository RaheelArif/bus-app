import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Body,
  Left,
  Text
} from "native-base";

class Booking extends Component {
  state = {
    bookings: []
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("ride", "Bookings")
    };
  };

  componentDidMount() {
    fetch("http://192.168.100.31:5000/booking")
      .then(res => res.json())
      .then(res => this.setState({ bookings: res }))
      .catch(err => console.log(err));
  }

  handleDelete = id => {
    axios
      .delete(`http://192.168.100.31:5000/booking/${id}`)
      .then(res => this.setState({ bookings: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Content padder>
          {this.state.bookings.map((booking, i) => (
            <Card key={i}>
              <CardItem>
                <Left>
                  <Text>From</Text>
                </Left>
                <Body>
                  <Text>{booking.from}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>To</Text>
                </Left>
                <Body>
                  <Text>{booking.to}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Address</Text>
                </Left>
                <Body>
                  <Text>{booking.address}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Text>Seats</Text>
                </Left>
                <Body>
                  <Text>{booking.seats}</Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Button danger onPress={() => this.handleDelete(booking._id)}>
                  <Text>Delete</Text>
                </Button>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}

export default Booking;
