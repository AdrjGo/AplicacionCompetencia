import * as React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './src/components/Navigation';



export default function App() {
  return (
    <Navigation style = {styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: "grey",
  }
});