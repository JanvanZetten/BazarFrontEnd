import {User} from './user';

export class Booth {
  id: number;
  booker: User; // if null this should be considered as not booked
}
