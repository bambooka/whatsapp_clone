import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import {ChatRoom} from "../types";

type ChatListItemProps = {
  ChatRoom: ChatRoom
}

export const ChatListItem = (props: ChatListItemProps) => {
  const {ChatRoom} = props;

  return (
    <View style={styles.container}>

      <View style={{flexBasis: '10%'}}>
        <Image style={{borderRadius: 50, marginHorizontal: 8, width: 50, height: 50}} source={{uri: 'data:image/jpeg;base64,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'}}/>
      </View>

      <View style={{flexBasis: '80%', flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#eeeeee', borderBottomWidth: 1}}>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: 'white'}}>{ChatRoom.users[1].name}</Text>
          <Text style={{color: '#fff'}}>{ChatRoom.lastMessage.content}</Text>
        </View>
        <Text style={{color: 'red'}}>{ChatRoom.lastMessage.createdAt}</Text>
        {/*<Text style={{color: 'red'}}>Yesterday</Text>*/}
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 13,
  }
})