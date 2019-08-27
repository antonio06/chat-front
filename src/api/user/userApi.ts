import { ApiError, ErrorMessage, User } from '../models';
import { urls } from './urls';

const addUser = async (userName: string): Promise<User | ErrorMessage> => {
  const response = await fetch(urls.addUser, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({ userName }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    return response.json();
  } else {
    const { error }: ApiError = await response.json();

    return error.message;
  }
};

export const userApi = {
  addUser,
};
