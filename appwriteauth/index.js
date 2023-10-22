/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/screens/Home';
import {name as appName} from './app.json';
import Home from './src/screens/Home';
import { Router } from './src/routes/Router';
import { AppStack } from './src/routes/AppStack';
import { AuthStack } from './src/routes/AuthStack';

AppRegistry.registerComponent(appName, () => Router);
