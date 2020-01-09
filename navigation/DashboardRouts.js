import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Dashboard from '../src/pages/Dashboard';
import AssignedHires from '../src/pages/AssignedHires';
import UpcomingHires from '../src/pages/UpcomingHires';
import PastHires from '../src/pages/PastHires';

const DashboardNavigator = createStackNavigator(
  {   
      Dashboard: {
          screen: Dashboard
      },
      HireAssignment:{
          screen:AssignedHires
      },
      UpcomingHires:{
          screen:UpcomingHires
      },
      PastHires:{
          screen:PastHires
      },
      
      initialRouteName:'Dashboard'
  }
)

export default createAppContainer(DashboardNavigator)