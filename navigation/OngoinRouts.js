import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import OngoinHires from "../src/pages/OngoinHires";
import TimeLine from "../src/pages/TimeLine";

const OngoinNavigator = createStackNavigator({
  TimeLine: {
    screen: TimeLine
  },

  initialRouteName: "TimeLine"
});

export default createAppContainer(OngoinNavigator);
