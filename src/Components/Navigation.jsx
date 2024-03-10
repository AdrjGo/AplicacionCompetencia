import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';
//pantallas
import HomeScreen from '../../screens/HomeScreen';
import StatScreen from '../../screens/StatScreen';
import NotifScreen from '../../screens/NotifScreen';
import ConfigScreen from '../../screens/ConfigScreen';

const Tab = createMaterialBottomTabNavigator();

function MyTabs (){
    return{
        
    };
}

export default MyTabs;