/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Scenario 1
// import App from './scenarios/thousand-views/App';
// Scenario 2
import App from './scenarios/thousand-texts/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
