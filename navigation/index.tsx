import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {ColorSchemeName, View, StyleSheet} from 'react-native';
import {Octicons, MaterialCommunityIcons} from '@expo/vector-icons'

import NotFoundScreen from '../screens/NotFoundScreen';
import {RootStackParamList} from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors from "../constants/Colors";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: Colors.dark.tint,
        borderBottomWidth: 0,
        elevation: 0,
        shadowOpacity: .0,
      },
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: Colors.dark.background
    }}>
      <Stack.Screen name="Root" options={{
        title: 'WhatsApp',
        headerTitleStyle: {
          color: Colors.dark.text,
        },
        headerRight: () => {
          return <View style={styles.headerRight}>
            <Octicons name="search" size={18} color="white" />
            <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
          </View>;
        },
      }} component={MainTabNavigator}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 60,
    marginRight: 10
  }
})