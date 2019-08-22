import { Message } from './view-model';
import { Message as ApiMessage, User } from '../../../../api/models';

export const mapMessageToVm = (message: ApiMessage, user: User | null): Message => {

  return {
    id: message.id,
    text: message.text,
    user,
  };
};
