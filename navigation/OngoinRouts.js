import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import OngoinHires from "../src/pages/OngoinHires";
import TimeLine_export from "../src/pages/TimeLine_export";
import Timeline_import from "../src/pages/Timeline_import";

const OngoinNavigator = createStackNavigator({
  TimeLine_export: {
    screen: TimeLine_export
  },
  Timeline_import: {
    screen:Timeline_import
  },

  initialRouteName: "TimeLine_export"
});

export default createAppContainer(OngoinNavigator);
