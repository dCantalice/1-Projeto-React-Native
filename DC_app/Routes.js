import { createStackNavigator, createAppContainer } from "react-navigation";
import App from './App';
import Img from "./Img";

const Routes = createStackNavigator({
  Home: {
    screen: App,
  },
  Img: {
    screen: Img,
  },
});

export default createAppContainer(Routes);