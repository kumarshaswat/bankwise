import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../src/screens/HomeScreen";
import LandingPage from "../src/screens/LandingPage";
import LoadingPage from "../src/screens/LoadingPage";
import CreateAccount from "../src/screens/CreateAccount";
import LogIn from "../src/screens/LogIn";

const screens = {
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
          }
    },
    LoadingPage: {
        screen: LoadingPage,
        navigationOptions: {
            header: null,
          }
    },
    LandingPage: {
        screen: LandingPage,
        navigationOptions: {
            header: null,
          }
    },
    createAccount: {
        screen: CreateAccount,
        navigationOptions: {
            header: null,
          }
    },
    logIn: {
        screen: LogIn,
        navigationOptions: {
            header: null,
          }
    }
};
const stack = createStackNavigator(screens);

export default createAppContainer(stack);