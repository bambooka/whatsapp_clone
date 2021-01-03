import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {ChatListItem} from "../components/ChatListItem";
import ChatRooms from '../data/ChatRooms'
import {ChatRoom} from "../types";

export default function ChatList() {

  return (
    <View style={styles.container}>
      {/*{console.log(ChatRooms)}*/}
      {
        ChatRooms.map((item, index: number) => (
          <ChatListItem key={index} ChatRoom={item}/>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
