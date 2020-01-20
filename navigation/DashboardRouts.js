import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "../src/pages/Dashboard";
import AssignedHires from "../src/pages/AssignedHires";
import UpcomingHires from "../src/pages/UpcomingHires";
import PastHires from "../src/pages/PastHires";
import OngoinHires from "../src/pages/OngoinHires";
import OngoinRouts from './OngoinRouts';

const DashboardNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  HireAssignment: {
    screen: AssignedHires
  },
  UpcomingHires: {
    screen: UpcomingHires
  },
  PastHires: {
    screen: PastHires
  },
  OngoinHires: {
    screen: OngoinHires
  },
  OngoinRouts: {
    screen: OngoinRouts,
    navigationOptions: () => ({
      header:null
    })
},

  initialRouteName: "Dashboard"
});

export default createAppContainer(DashboardNavigator);
