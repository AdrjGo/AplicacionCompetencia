import React from 'react';
import { SafeAreaView} from 'react-native';
import Switcher from '../src/components/Switch';
import SwitchP from '../src/components/SwitchPrincipal';

const NotifScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:"#1a1a1a"}}>
          <SwitchP texto="notificaciones" activateText="Notificaciones activadas" />
          <Switcher texto="limite de gasto" activateText="Importe: "/>
          <Switcher texto="salario" activateText="Importe:"/>
        </SafeAreaView>
      );
}

export default NotifScreen