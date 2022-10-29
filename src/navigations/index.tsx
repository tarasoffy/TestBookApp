import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {SCREEN_NAMES} from '../constants/screenNames';
import {HomeScreen} from '../screens/HomeScreen';
import {RootStackParamList} from './RootStack.props';
import { BookRead } from '../screens/BookReaderScreen';

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_NAMES.HOME_SCREEN}>
        <Stack.Screen
          name={SCREEN_NAMES.HOME_SCREEN}
          component={HomeScreen}
          options={{...screenOptions}}
        />
        <Stack.Screen
          name={SCREEN_NAMES.BOOK_READ_SCREEN}
          component={BookRead}
          options={{...screenOptions}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MainStack};
