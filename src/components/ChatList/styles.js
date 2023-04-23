import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  chatItemContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatItemInfo: {
    marginLeft: 10,
  },
  chatItemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatItemTimestamp: {
    fontSize: 12,
    color: 'gray',
  },
});
