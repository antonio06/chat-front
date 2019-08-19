import { ErrorMessage } from '../../api/models';

export const getErrorMessageFromApiError = (apiError: ErrorMessage): string => {
  switch (apiError) {
    case 'not-valid-username':
      return 'The user name is not valid';
      break;
    case 'user-already-exists':
      return 'The user already exists';
      break;
    default:
      return '';
  }
};
