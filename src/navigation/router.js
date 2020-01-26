import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Menu from '../screens/menu/menu';

const Router = createStackNavigator(
  {
    menu: {
      screen: Menu,
    },
  },
  {
    initialRouteName: 'menu',
  },
)

export default createAppContainer(Router);