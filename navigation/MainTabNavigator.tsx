import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {MainTabParamList} from '../types';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import {Fontisto} from "@expo/vector-icons";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import ChatList from "../screens/ChatList";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function TabTop({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#128C7E' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
              <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[{ maxWidth: route.name === 'Camera' ? 40 : 'auto'},
                {borderBottomWidth: isFocused ? 4 : 0, borderBottomColor: isFocused ? '#ffffff' : 'transparent'},
                styles.tabAlign]}
              key={index}
            >
                {
                  route.name === 'Camera' ?
                    <Fontisto name="camera" size={18} color='#ffffff'/> :
                    <Text style={[styles.tabLabel,
                      { color: isFocused ? '#ffffff' : '#eeeeee' }]}>
                      {label}
                    </Text>
                }

            </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      tabBar={(props) => <TabTop {...props} />}
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: 'white',
          height: 5,
        },
        labelStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
        },
        showLabel: true,
        showIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={
          () => <View>
            <Text>fff</Text>
          </View>
        }
        options={{
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatList}
      />
      <MainTab.Screen
        name="Status"
        component={ChatList}
      />
      <MainTab.Screen
        name="Calls"
        component={ChatList}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabLabel: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})