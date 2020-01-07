import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import AuthLoading from './pages/AuthLoading';

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
      Dashboard: {
          screen: Dashboard
      },
     
  },
  {
      initialRouteName:'Loader'
  }
)

export default createAppContainer(SwitchNavigator)