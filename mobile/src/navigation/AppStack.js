import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Dimensions, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Create from '../screens/Create';
import Profile from '../screens/Profile';
import Icons from '../assets/Icons';
import COLORS from '../config/colors';

const Tab = createBottomTabNavigator();
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const AppStack = () => {
  // Tab ikonu oluşturmak için yardımcı fonksiyon
  const renderTabIcon = (icon, focused) => (
    <View style={styles.tabIconContainer}>
      <Image
        source={icon}
        style={[
          styles.tabIcon,
          {tintColor: focused ? COLORS.primary : COLORS.textSecondary},
        ]}
        resizeMode="contain"
      />
    </View>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(Icons.home, focused),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(Icons.add, focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(Icons.profile, focused),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: windowHeight * 0.08,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingBottom: windowHeight * 0.01,
    paddingTop: windowHeight * 0.01,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
  },
});

export default AppStack;
