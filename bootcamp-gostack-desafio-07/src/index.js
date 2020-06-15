import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import './config/reactotronconfig';
import store from './store';
import NavigationService from './services/navigation';

function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#191920" />
            <Provider store={store}>
                <Routes
                    ref={navigatorRef =>
                        NavigationService.setNavigator(navigatorRef)
                    }
                />
            </Provider>
        </>
    );
}

export default App;
