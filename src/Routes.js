import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';

const isLogin = false

const SwitchNavigator = createStackNavigator(
  {   
      Login: {
          screen: Login,
      },
      Dashboard: {
          screen: Dashboard
      },
     
  },
  {
      initialRouteName: isLogin ? 'Dashboard' :  'Login'
  }
)

export default createAppContainer(SwitchNavigator)