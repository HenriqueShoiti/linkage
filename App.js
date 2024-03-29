import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, image, SafeAreaView, Button} from 'react-native';

import styles from './styles.js'
import Navigation from './src/navigation/';

import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'



Amplify.configure(config)

const App = () => {
  return (      
      <SafeAreaView style = {styles.root}>
        <Navigation/>
      </SafeAreaView>
  );
}

export default App;
