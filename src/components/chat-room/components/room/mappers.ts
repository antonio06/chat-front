import { Message as ApiMessage, User } from '../../../../api/models';
import { Message } from './view-model';

export const mapMessageToVm = (message: ApiMessage, user: User | null): Message => ({
  id: message.id,
  text: message.text,
  user,
});
