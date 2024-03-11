import React, { useState } from 'react';
import { View, Text, Switch, TextInput, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './src/styles/styleLimite.jsx';

const EstablecerLimiteGasto = () => {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const [limiteIngreso, setLimiteIngreso] = useState('');
  const [tiempoLimite, setTiempoLimite] = useState('Semanal');

  const toggleSwitch = () => setIsSwitchEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageCircle}>
          <Image source={require('./assets/Noti.jpg')} style={styles.image} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Establecer Límite de Gasto</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isSwitchEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isSwitchEnabled}
          />
        </View>
        {isSwitchEnabled && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Límite de Ingreso"
              value={limiteIngreso}
              onChangeText={setLimiteIngreso}
              keyboardType="numeric"
            />
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Tiempo Límite</Text>
              <Picker
                style={styles.picker}
                selectedValue={tiempoLimite}
                onValueChange={(itemValue, itemIndex) => setTiempoLimite(itemValue)}
              >
                <Picker.Item label="Semanal" value="Semanal" />
                <Picker.Item label="Mensual" value="Mensual" />
                <Picker.Item label="Anual" value="Anual" />
              </Picker>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default EstablecerLimiteGasto;
