import React from 'react';
import { TouchableOpacity ,StyleSheet, Text,  View} from 'react-native';

const StatScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Text>Pantalla de Estadisticas</Text>
        </View>
      );
}

export default StatScreen

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: "grey",
      justifyContent: 'center'
  }
});