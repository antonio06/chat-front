import io from 'socket.io-client';
let socket: SocketIOClient.Socket | null = null;

const url = 'ws://localhost:8080';

const events = {
  connection: 'connection',
  disconnect: 'disconnect',
  loggedUser: 'loggedUser',
  addMessage: 'addMessage',
  errorAddMessage: 'errorAddMessage',
  successAddMessage: 'successAddMessage',
  onConnected: 'onConnected',
};

const establishConnection = (userId: string) => {
  socket = io(url, {
    query: { userId },
  });

  socket.connect();
};

const getSocket = () => {
  return socket;
};

export const socketService = {
  establishConnection,
  getSocket,
  events,
};
