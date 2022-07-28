import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, image, SafeAreaView, Button} from 'react-native';

import styles from './styles.js'

import Navigation from './src/navigation/';


export default function App() {
  return (      
      <SafeAreaView style = {styles.root}>
        <Navigation/>
      </SafeAreaView>
  );
}


