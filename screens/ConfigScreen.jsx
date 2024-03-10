import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Buttons from '../src/components/Buttons'

const ConfigScreen = () =>  {
  return (
    <SafeAreaView style={{ backgroundColor: "#1a1a1a", flex: 1 }}>
      <Buttons text="Divisa"  />
      <Buttons text="Contraseña"/>
      <Buttons text="Tema de la aplicación"/>
      <Buttons text="Modo oscuro"/>
      <Buttons text="Copia de seguridad"/>
      <Buttons text="Información"/>
      <Buttons text="Dudas o sugerencias"/>
      <Buttons text="Política de privacidad"/>
    </SafeAreaView>
  );
}
export default ConfigScreen