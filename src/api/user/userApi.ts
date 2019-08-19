import { User } from '../models';
import { urls } from './urls';

const addUser = async (userName: string): Promise<User | string> => {
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
    const error: Error = await response.json();

    return error.message;
  }
};

export const userApi = {
  addUser,
};
