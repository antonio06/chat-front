import { User } from '../models';
import { urls } from './urls';

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

export const addUser = async (userName: string) => {
  const response = await fetch(urls.addUser, {
    method: 'POST',
    body: userName,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
