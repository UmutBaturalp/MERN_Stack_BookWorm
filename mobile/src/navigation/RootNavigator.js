import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import useAuthPersistence from '../hooks/useAuthPersistence';

const Stack = createStackNavigator();

const RootNavigator = () => {
  // Storage'dan kullanıcı verilerini yükleme hook'u
  const {isLoading} = useAuthPersistence();

  // Redux'tan kimlik doğrulama durumunu al
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // Kimlik doğrulama kontrol edilirken yükleniyor durumu göster
  if (isLoading) {
    // Burada splash screen veya loading indicator gösterilebilir

    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="App" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
