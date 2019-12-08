import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../screens/Home";
import DetailScreen from "../screens/Detail";
import BookingScreen from "../screens/Booking";
import AuthScreen from "../screens/AuthScreen";
import BussesScreen from "../screens/Busses";
import UserChat from '../screens/UserChat';
import SeatsScreen from "../screens/Seats";
import TicketScreen from "../screens/Ticket";

const StackNavigation = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Booking: BookingScreen,
    Auth: AuthScreen,
    Busses: BussesScreen,
    UserChat,
    Seats: SeatsScreen,
    Ticket: TicketScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#403E3E"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppNavigator = createAppContainer(StackNavigation);

export default AppNavigator;
