# React Native Chat App

This is UI for a simple React Native chat app that allows users to navigate between conversations, see current conversation, send text messages and receive text and video messages.

## Approach

- Built with React Native CLI
- React Navigation used for handling navigation between screens
- Custom styling using React Native's `StyleSheet`
- Mock data used to simulate conversations and messages
- `FlatList` component used for efficient rendering of chat lists and message history
- `react-native-video` library used for displaying video messages with a built-in video player and controls
- `KeyboardAvoidingView` used for handling keyboard appearance and adjusting the layout accordingly
- `dayjs` library used for handling dates and time formatting


## Getting Started

### Prerequisites

Read the [React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup) to install the necessary tools for building React Native apps.

### Installation

1. Clone the repository
2. Install dependencies
```bash
npm install
```
3. Start metro
```bash
 npx react-native start
```
4. Run the application on Android or iOS

For Android:
```bash
npm run android
```
For iOS:
```bash
npm run ios
```
