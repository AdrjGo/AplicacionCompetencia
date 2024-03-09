import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloprincipal}>Inicio</Text>
      <StatusBar style="ligth" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
  },
  tituloprincipal:{
    padding:10-5,
    fontSize:20,
    fontWeight:blur,
  }
});
