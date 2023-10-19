import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Screens/Home/Home';
import Leagues from './Screens/Leagues/Leagues';
import Research from './Screens/Research/Research';
import LeaderBoard from './Screens/LeaderBoard/LeaderBoard';
import Profile from './Screens/Profile/Profile';

const Tab = createBottomTabNavigator();

const NavigationRouter = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Leagues') {
              iconName = focused ? 'trophy' : 'trophy';
            } else if (route.name === 'Research') {
              iconName = focused ? 'search' : 'search-plus';
            } else if (route.name === 'LeaderBoard') {
              iconName = focused ? 'signal' : 'signal';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user-o' : 'user-circle-o';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen name="Leagues" component={Leagues} />
        <Tab.Screen name="Research" component={Research} />
        <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRouter;
