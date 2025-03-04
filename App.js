import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { FunctionCallingMode } from 'firebase/vertexai';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserLocationsContext } from './contexts/UserLocationsContext';
import LocationsView from './screens/LocationsView';

const Drawer = createDrawerNavigator()

export default function App() {

return(
  <LocationsView/>
)
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
