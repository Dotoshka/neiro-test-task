import React from 'react';
import { View, FlatList, TouchableOpacity, Text, Image } from 'react-native';
import { chatList } from '../../.mocks/mockData';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';

export const ChatList = () => {
  const navigation = useNavigation();

  const onChatPress = (id) => {
    navigation.navigate('ChatPage', { chatId: id });
  };

  const renderItem = ({ item: {id, avatar, name, messages} }) => {
    const lastMessage = messages[messages?.length - 1];

    return (
      <TouchableOpacity onPress={() => onChatPress(id)}>
        <View style={styles.chatItemContainer}>
          <Image source={{ uri: avatar }} style={styles.chatAvatar}/>
          <View style={styles.chatItemInfo}>
            <Text style={styles.chatItemName}>{name}</Text>
            <Text>
              {lastMessage?.type === 'video' ? '[Video]' : lastMessage?.content}
            </Text>
            <Text style={styles.chatItemTimestamp}>
              {dayjs(lastMessage?.timestamp).format('DD.MM.YYYY')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View>
      <FlatList
        data={chatList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
