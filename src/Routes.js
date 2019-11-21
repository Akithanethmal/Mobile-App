import React ,{Component}from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';

export default class  Routes extends Component{
    render(){
        return(
            <Router>
            <Stack key="root">
              <Scene key="login" component={Login} title="Login" />
              <Scene key="register" component={Register} title="Register" />
              <Scene key="home" component={Home} />
            </Stack>
          </Router>
        );
    }

}