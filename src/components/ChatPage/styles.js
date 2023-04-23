import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chatPage: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 5,
    maxWidth: '70%',
  },
  messageContainerMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#1e88e5',
  },
  messageContent: {
    color: 'black',
  },
  messageContentMe: {
    color: 'white',
  },
  messageTimestamp: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'right',
  },
  messageTimestampMe: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 5,
    paddingBottom: 30,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#1e88e5',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
  },
  video: {
    width: 200,
    height: 150,
  },
});
