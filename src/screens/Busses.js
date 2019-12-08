import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Button
} from "native-base";

class Busses extends Component {
  state = {
    busses: []
  };

  componentDidMount() {
    fetch("http://192.168.100.31:5000/booking/vehicles")
      .then(resp => {
        return resp.json();
      })
      .then(resp => {
        this.setState({ busses: resp });
      });
  }

  render() {
    const a = this.props.navigation.getParam("data");
    const data = {
      from: a.from,
      to: a.to,
      time: a.time,
      date: a.date,
      seats: a.seats
    };
    return (
      <Container>
        <Content padder>
          {this.state.busses.map((bus, i) => (
            <Card key={i}>
              <CardItem>
                <Body>
                  <Text>{bus.vehiclename}</Text>
                </Body>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{ uri: bus.vehicleimg }}
                  style={{ height: 300, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem>
                <Left>
                  <Button
                    onPress={() =>
                      this.props.navigation.navigate("Seats", { data })
                    }
                  >
                    <Text>Select</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}

export default Busses;
