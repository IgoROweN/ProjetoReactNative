import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cards from './pages/cards';  
import Login from './pages/login';
import Register from './pages/register';
import Details from './pages/details';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'LOGIN',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#8e44ad',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen 
          name="register"
          component={Register}
          options={{
            title: 'REGISTER',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#8e44ad',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="cards" 
          component={Cards}  
          options={{
            title: 'RICK AND MORTY VIEWER',
            headerTitleAlign: 'center',
            headerLeft: null,
            headerStyle: {
              backgroundColor: '#8e44ad',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: 'DETAILS',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#8e44ad',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
