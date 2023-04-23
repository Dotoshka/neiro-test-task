import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ChatList } from '../components/ChatList';
import { ChatPage } from '../components/ChatPage';

const Stack = createStackNavigator();

export default function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
