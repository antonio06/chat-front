import { ErrorMessage } from '../../api/models';

export const getErrorMessageFromApiError = (apiError: ErrorMessage): string => {
  switch (apiError) {
    case 'not-valid-username':
      return 'The user name is not valid';
    case 'user-already-exists':
      return 'The user already exists';
    case 'conversation-add-error':
      return 'The message could not be send';
    default:
      return 'Oops!! one error has ocurred';
  }
};
