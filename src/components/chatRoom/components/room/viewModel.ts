export interface Conversation {
  id: number;
  user: string;
  message: string;
}

export const defaultConversationValues = (): Conversation[] => ([
  {
    id: 0,
    message: '',
    user: '',
  },
]);
