/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
// import type { PropsWithChildren } from 'react';


import Screen1 from './Screen1';
import Screen2 from './Screen2';


function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen1" component={Screen1} options={{title:"home scr1"}} />
        <Stack.Screen name="screen2" component={Screen2} options={{title:"scr2"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
