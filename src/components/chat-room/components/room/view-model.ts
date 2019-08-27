import { User } from '../../../../api/models';

export interface Message {
  id: string;
  user: User | null;
  text: string;
}
