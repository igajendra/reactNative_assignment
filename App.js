import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Portfolio from './src/pages/Portfolio';
import Wallet from './src/pages/Wallet';
import Profile from './src/pages/Profile';

const icons = {
  home: require('./media/homeIcon2.png'),
  briefcase: require('./media/portfolio2.png'),
  wallet: require('./media/wallet2.png'),
  user: require('./media/profile2.png')
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Portfolio') {
              iconName = 'briefcase';
            } else if (route.name === 'Wallet') {
              iconName = 'wallet';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return (
              <View style={[styles.iconContainer]}>
                <Image style={{ width: 50, height: 50 }} source={icons[iconName]}></Image>
              </View>
            );
          },
          headerShown: false,
          tabBarLabel: ({ color }) => {
            return <Text style={{ color, fontWeight: 'bold', marginTop: 10 }}>{route.name}</Text>;
          },
          tabBarStyle: {
            backgroundColor: '#000000',
            borderTopWidth: 0,
            height: 100,
            paddingBottom: 10,
            paddingTop: 15,
          },
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: '#b0b0b0',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Portfolio" component={Portfolio} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    padding: 10,
  },
  iconContainerFocused: {
    backgroundColor: '#303030',
  },
});
