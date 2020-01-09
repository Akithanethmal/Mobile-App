import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from '../src/pages/Login'
import DashboardRouts from './DashboardRouts';
import AuthLoading from '../src/pages/AuthLoading';
//import HireAssignment from '../src/pages/HireAssignment';

const SwitchNavigator = createStackNavigator(
  {   Loader:{
        screen:AuthLoading,
        navigationOptions: () => ({
            header:null
          })
      },
      Login: {
          screen: Login,
      },
      DashboardRouts: {
          screen: DashboardRouts,
          navigationOptions: () => ({
            header:null
          })
      },
     
  },
  {
      initialRouteName:'Loader'
  }
)

export default createAppContainer(SwitchNavigator)