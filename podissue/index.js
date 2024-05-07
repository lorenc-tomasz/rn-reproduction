/**
 * @format
 */

// eslint-disable-next-line no-restricted-imports
import { AppRegistry, Text, TextInput } from 'react-native';

import { name as appName } from './app.json';
import App from './src';

AppRegistry.registerComponent(appName, () => App);
