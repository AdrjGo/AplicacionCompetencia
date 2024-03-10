import React, {Component} from 'react';
import { View, Button, StyleSheet, Text, TouchableHighlight } from 'react-native';

const ConfigScreen = () => {
  return (
      <View style = {styles.container} >
        <Button title='Divisa' color="#181818"/>
        <Button title='Contraseña' color="#181818"/>
        <Button title='Tema de la aplicación' color="#181818"/>
        <Button title='Modo oscuro' color="#181818"/>
        <Button title='Copia de seguridad' color="#181818"/>
        <Button title='Información' color="#181818"/>
        <Button title='Dudas o sugerencias' color="#181818"/>
        <Button title='Política de privacidad' color="#181818"/>
      </View>
  );
}

export default ConfigScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#181818'
  },
});