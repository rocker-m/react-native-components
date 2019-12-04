import React, { useState } from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import TextInputs from './App/components/TextInputs.js'
import ListViews from './App/components/ListViews.js'
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => ListViews);
