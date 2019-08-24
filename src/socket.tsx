import * as React from 'react';
import io from 'socket.io-client';

const url = 'ws://localhost:8080';

interface ContextValue {
  socket: SocketIOClient.Socket | null;
  establishConnection(userId: string): SocketIOClient.Socket;
}

interface State {
  socket: SocketIOClient.Socket | null;
}

export const SocketContext = React.createContext<ContextValue>({} as ContextValue);

export class SocketProvider extends React.PureComponent<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
    };
  }

  establishConnection: ContextValue['establishConnection'] = (userId) => {
    const socket = io(url, {
      query: { userId },
    });

    this.setState({
      socket: io(url, {
        query: { userId },
      }),
    });

    return socket.connect();
  }

  render() {
    return (
      <SocketContext.Provider value={{
        socket: this.state.socket,
        establishConnection: this.establishConnection,
      }}>
        {this.props.children}
      </SocketContext.Provider>
    );
  }
}
