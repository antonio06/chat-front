import { User } from '../models';
import { urls } from './urls';

const addUser = async (userName: string): Promise<User> => {
  const response = await fetch(urls.addUser, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({ userName }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return response.json();
};

export const userApi = {
  addUser,
};
