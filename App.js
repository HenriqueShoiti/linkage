import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, image} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up ayour app</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
