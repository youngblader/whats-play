import { AppRegistry } from 'react-native';

import { withOnBootNetworkActivityRecording } from '@rozenite/network-activity-plugin';

import { name as appName } from './app.json';
import { App } from './src/app/core/App';

withOnBootNetworkActivityRecording();

AppRegistry.registerComponent(appName, () => App);
