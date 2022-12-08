import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, image, SafeAreaView, Button} from 'react-native';

import styles from './styles.js'
import Navigation from './src/navigation/';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {withAuthenticator} from 'aws-amplify-react-native'


Amplify.configure(awsconfig)

const App = () => {
  return (      
      <SafeAreaView style = {styles.root}>
        <Navigation/>
      </SafeAreaView>
  );
}

export default App;
