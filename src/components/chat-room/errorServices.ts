import { ErrorMessage } from '../../api/models';

const errorMessages = {
  notValidUsername: 'not-valid-username',
  useralreadyExists: 'user-already-exists',
};

export const getErrorMessageFromApiError = (apiError: ErrorMessage): string => {
  switch (apiError) {
    case errorMessages.notValidUsername:
      return 'The user name is not valid';
      break;
    case errorMessages.useralreadyExists:
      return 'The user already exists';
      break;
    default:
      return '';
  }
};
