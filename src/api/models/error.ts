export type ErrorMessage =
  | 'not-valid-username'
  | 'user-already-exists';

export interface ApiError {
  error: {
    name: string;
    message: ErrorMessage;
  };
}
