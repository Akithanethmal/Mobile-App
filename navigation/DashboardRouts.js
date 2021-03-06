import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Dashboard from "../src/pages/Dashboard";
import AssignedHires from "../src/pages/AssignedHires";
import UpcomingHires from "../src/pages/UpcomingHires";
import PastHires from "../src/pages/PastHires";
import OngoinHires from "../src/pages/OngoinHires";
import TimeLine_export from "../src/pages/TimeLine_export";
import Timeline_import from "../src/pages/Timeline_import";
import profile from "../src/pages/profile";

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
  import: {
    screen: Timeline_import
  },
  export: {
    screen: TimeLine_export
  },
  profile:{
    screen:profile
  },

  initialRouteName: "Dashboard"
});

export default createAppContainer(DashboardNavigator);
