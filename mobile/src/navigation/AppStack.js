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
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={Icons.home}
                style={[
                  styles.tabIcon,
                  {tintColor: focused ? COLORS.primary : COLORS.textSecondary},
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={Icons.add}
                style={[
                  styles.tabIcon,
                  {tintColor: focused ? COLORS.primary : COLORS.textSecondary},
                ]}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabIconContainer}>
              <Image
                source={Icons.profile}
                style={[
                  styles.tabIcon,
                  {tintColor: focused ? COLORS.primary : COLORS.textSecondary},
                ]}
                resizeMode="contain"
              />
            </View>
          ),
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

export {AppStack};
