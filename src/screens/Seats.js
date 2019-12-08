import React, { Component } from "react";
import axios from "axios";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";

import fontelloConfig from "../../resources/config.json";

const Icon = createIconSetFromFontello(fontelloConfig);

class Seats extends Component {
  state = {
    booked: []
  };

  handleBookSeat = seat => {
    const data = this.props.navigation.getParam("data");
    if (this.state.booked.length < data.seats) {
      if (this.state.booked.indexOf(seat) == -1) {
        this.setState(prevState => {
          return {
            booked: [...prevState.booked, seat]
          };
        });
      } else {
        this.setState(prevState => {
          return {
            booked: prevState.booked.filter(book => book !== seat)
          };
        });
      }
    } else {
      alert(`You can only select ${data.seats} seats`);
    }
  };

  getSeatStatus = seat => {
    return this.state.booked.indexOf(seat) == -1 ? "grey" : "blue";
  };

  bookTicket = () => {
    const data = this.props.navigation.getParam("data");
    const senData = { ...data, seats: this.state.booked };
    axios
      .post("http://192.168.100.31:5000/booking/ticket", senData)
      .then(res => alert("Booking Saved"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {/* <Text>asdasd</Text> */}
        <View
          style={{
            // flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 30
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "50%",
              paddingLeft: 50
            }}
          >
            {row1.map(seat => (
              <Icon
                style={{
                  flexBasis: "50%",
                  marginTop: 10,
                  marginBottom: 10
                }}
                key={seat}
                name='seat'
                size={43}
                onPress={() => this.handleBookSeat(seat)}
                color={this.getSeatStatus(seat)}
              />
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              width: "50%",
              paddingLeft: 50
            }}
          >
            {row2.map(seat => (
              <Icon
                style={{
                  flexBasis: "50%",
                  marginTop: 10,
                  marginBottom: 10
                }}
                key={seat}
                name='seat'
                size={43}
                onPress={() => this.handleBookSeat(seat)}
                color={this.getSeatStatus(seat)}
              />
            ))}
          </View>
        </View>
        {/* <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}> */}
        <Button title='Submit' onPress={this.bookTicket} />
        {/* <Button
            title='My Tickets'
            onPress={() => this.props.navigation.navigate("Ticket")}
          /> */}
        {/* </View> */}
      </View>
    );
  }
}

const row1 = [
  "s1",
  "s2",
  "s3",
  "s4",
  "s5",
  "s6",
  "s7",
  "s8",
  "s9",
  "s10",
  "s11",
  "s12",
  "s13",
  "s14",
  "s15",
  "s16",
  "s17",
  "s18",
  "s19",
  "s20",
  "s21",
  "s22",
  "s23",
  "s24",
  "s25",
  "s26"
];
const row2 = [
  "s27",
  "s28",
  "s29",
  "s30",
  "s31",
  "s32",
  "s33",
  "s34",
  "s35",
  "s36",
  "s37",
  "s38",
  "s39",
  "s40",
  "s41",
  "s42",
  "s43",
  "s44",
  "s45",
  "s46",
  "s47",
  "s48",
  "s49",
  "s50",
  "s52",
  "s53"
];

export default Seats;
