import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

//pantallas
import HomeScreen from '../../screens/HomeScreen';
import StatScreen from '../../screens/StatScreen';
import NotifScreen from '../../screens/NotifScreen';
import ConfigScreen from '../../screens/ConfigScreen';


const Tab = createMaterialBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName='Inicio' 
        screenOptions={{tabBarColor: "black",

        }}>
            <Tab.Screen name='Inicio' component={HomeScreen} 
            options={{
                tabBarIcon: ({ color, size}) => (<Entypo name="home" size={24} color={color} />),
                title: 'Inicio'
            }}/>
            <Tab.Screen name='Estadísticas' component={StatScreen} 
            options={{
                tabBarIcon:({ color, size}) => (<MaterialIcons name="query-stats" size={24} color={color} />)
            }}/>
            <Tab.Screen name='Notificaciones' component={NotifScreen} 
            options={{tabBarIcon:({ color, size})=> (<Ionicons name="notifications" size={24} color={color} />)
        }}/>
            <Tab.Screen name='Configuración' component={ConfigScreen} 
            options={{
                tabBarIcon:({ color, size}) => (<SimpleLineIcons name="settings" size={24} color={color} />)
            }}/>
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "steelblue",
    },
    tituloprincipal:{
      padding: 10-5,
      fontSize: 20,
    },
    botonAgregar:{
      borderRadius: 10,
      width:"50%",
    },
  });