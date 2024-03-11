import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './src/styles/styleGasto.jsx';

const RegistroGastos = () => {
  const [importe, setImporte] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [categoria, setCategoria] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const categorias = ['Alimentación', 'Transporte', 'Entretenimiento', 'Facturas', 'Otros'];
  const cuentas = ['Cuenta Bancaria', 'Tarjeta de Crédito', 'Efectivo', 'Otra'];

  const handleGuardar = () => {
    console.log('Datos guardados:', { importe, fecha, categoria, cuenta, descripcion });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fecha;
    setFecha(currentDate);
  };

  return (
    <ImageBackground source={require('./assets/moneda1.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>REGISTRO DE GASTOS</Text>
        <Text style={styles.inputTitle}>Gasto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Gasto"
          value={importe}
          onChangeText={(text) => setImporte(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
        />

        <Text style={styles.inputTitle}>Fecha:</Text>
        {Platform.OS === 'ios' && (
          <DatePickerIOS
            style={styles.input}
            date={fecha}
            onDateChange={handleDateChange}
            mode="date"
          />
        )}
        {Platform.OS === 'android' && (
          <TextInput
            style={styles.input}
            placeholder="Fecha"
            value={fecha.toLocaleDateString()}
            editable={false}
          />
        )}
       <Text style={styles.inputTitle}>Categoria:</Text>
        <Picker
          style={styles.input}
          selectedValue={categoria}
          onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
        >
          {categorias.map((cat, index) => (
            <Picker.Item key={index} label={cat} value={cat} />
          ))}
        </Picker>

        <Text style={styles.inputTitle}>Cuenta:</Text>
        <Picker
          style={styles.input}
          placeholder="Descripción"
          selectedValue={cuenta}
          onValueChange={(itemValue, itemIndex) => setCuenta(itemValue)}
        >
          {cuentas.map((acc, index) => (
            <Picker.Item key={index} label={acc} value={acc} />
          ))}
        </Picker>

        <Text style={styles.inputTitle}>Descripcion:</Text>
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={descripcion}
          onChangeText={setDescripcion}
        />
        <TouchableOpacity style={styles.button} onPress={handleGuardar}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegistroGastos;
