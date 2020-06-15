import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import Main from './pages/Main';
import User from './pages/User';
import GitHubPage from './pages/GitHubPage';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
            GitHubPage,
        },
        {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#fff',

                headerTitleAlign: 'center',
            },
        }
    )
);

export default Routes;
