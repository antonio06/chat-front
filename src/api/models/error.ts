export type ErrorMessage =
  | 'not-valid-username'
  | 'user-already-exists'
  | 'conversation-add-error';

export interface ApiError {
  error: {
    name: string;
    message: ErrorMessage;
  };
}

export interface ApiSocketError {
  message: ErrorMessage;
}
