import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { FunctionCallingMode } from 'firebase/vertexai';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, IconButton, PaperProvider, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserLocationsContext } from './contexts/UserLocationsContext';
import LocationsView from './screens/LocationsView';
import Login from './screens/LoginView';
import { LocationsContext } from './contexts/LocationsContext';
import { NavigationContainer } from '@react-navigation/native';
import { logoutUser, useFireAuth } from './firebase/FirebaseAuthController';

const Drawer = createDrawerNavigator()

export default function App() {

  const [user, locations] = useFireAuth()


return(
  <UserLocationsContext.Provider value={locations}>
    <LocationsContext.Provider value={user}>
      <PaperProvider>
        {user ? <Navigation/>: <Login/>}
      </PaperProvider>
    </LocationsContext.Provider>
  </UserLocationsContext.Provider>

  
  
)



}

function Navigation() {
  const user = useContext(LocationsContext)

  return(
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerRight: () => <IconButton icon={'logout'} onPress={logoutUser}/>}}>
      <Drawer.Screen name='Locations' component={LocationsView} />

      </Drawer.Navigator>

    </NavigationContainer>
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
