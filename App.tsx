import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import homescreen from './screens/homescreen';
import aboutscreen from './screens/aboutscreen';
import contactscreen from './screens/contactscreen';
import sixmonthscreen from './screens/sixmonthscreen';
import sixweekscreen from './screens/sixweekscreen';
import Applyscreen from './screens/applyscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Main Navigation Screens */}
        <Stack.Screen name="Home" component={homescreen} />
        <Stack.Screen name="About Us" component={aboutscreen} />
        <Stack.Screen name="Contact Us" component={contactscreen} />
        

        {/* Course Screens */}
        <Stack.Screen name="SixMonthCourses" component={sixmonthscreen} />
        <Stack.Screen name="SixWeekCourses" component={sixweekscreen} />

        {/* Apply Page */}
        <Stack.Screen name="Apply" component={Applyscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
