import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Video from 'react-native-video';
import { styles } from './styles';
import dayjs from 'dayjs';
import { useRoute } from '@react-navigation/native';
import { chatList } from '../../.mocks/mockData';

export const ChatPage = () => {
  const { params: { chatId } } = useRoute();
  const [chatMessages, setChatMessages] = useState(chatList.find((chat) => chat.id === chatId)?.messages ?? []);
  const [inputText, setInputText] = useState('');

  const renderItem = ({ item }) => {
    const isVideo = item.type === 'video';

    return (
      <View style={[styles.messageContainer, item.isMine ? styles.messageContainerMe : {}]}>
        {isVideo ? (
          <Video
            source={{ uri: item.content }}
            style={styles.video}
            resizeMode="contain"
            controls={true}
            paused
          />
        ) : (
          <Text
            style={[styles.messageContent, item.isMine ? styles.messageContentMe : {}]}
          >
            {item.content}
          </Text>
        )}
        <Text style={[styles.messageTimestamp, item.isMine ? styles.messageTimestampMe : {}]}>
          {dayjs(item.timestamp).format('DD.MM.YYYY HH:MM')}
        </Text>
      </View>
    );
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          isMine: true,
          content: inputText,
          type: 'text',
          timestamp: Date.now(),
        },
      ]);
    }

    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === 'ios'}
      keyboardVerticalOffset={100}
      behavior="padding"
      style={styles.chatPage}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <FlatList
            data={chatMessages}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type a message..."
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
