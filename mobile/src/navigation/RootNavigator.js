import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {AuthStack} from './AuthStack';
import {AppStack} from './AppStack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  // Use the authentication state from Redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="App" component={AppStack} />
        ) : (
          <Stack.Screen name="App" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
