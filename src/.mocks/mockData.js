export const chatList = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150',
    messages: [
      {
        isMine: true,
        type: 'text',
        content: 'Hey John!',
        timestamp: '2023-04-19T10:00:00Z',
      },
      {
        isMine: false,
        type: 'text',
        content: 'Hello, how are you?',
        timestamp: '2023-04-19T10:01:00Z',
      },
    ],
  },
  {
    id: '2',
    name: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150',
    messages: [
      {
        isMine: false,
        type: 'text',
        content: 'Can we meet today?',
        timestamp: '2023-04-19T09:50:00Z',
      },
    ],
  },
  {
    id: '3',
    name: 'Michael Brown',
    avatar: 'https://i.pravatar.cc/150',
    messages: [
      {
        isMine: false,
        type: 'text',
        content: 'Check out this video!',
        timestamp: '2023-04-23T09:30:00Z',
      },
      {
        isMine: false,
        type: 'video',
        content: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        timestamp: '2023-04-23T09:31:00Z',
      },
      {
        isMine: true,
        type: 'text',
        content: 'It\'s amazing!',
        timestamp: '2023-04-23T09:36:00Z',
      },
    ],
  },
];
