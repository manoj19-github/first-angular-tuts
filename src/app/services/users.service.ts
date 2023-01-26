import { EventEmitter } from '@angular/core';
import { IUserList } from '../common/userlist.interface';

export class userService {
  userList: IUserList[] = [
    {
      id: 1,
      name: 'Manoj Santra',
      city: 'Kolkata',
      username: 'Manu',
      phone: '9748159138',
      email: 'santramanoj1997@gmail.com',
    },
    {
      id: 1,
      name: 'bikas sarkar',
      city: 'Kolkata',
      username: 'bikas',
      phone: '9748159138',
      email: 'santramanoj1997@gmail.com',
    },
  ];
  onShowUserEvent = new EventEmitter<IUserList>();
  showUserDetails(user: IUserList) {
    this.onShowUserEvent.emit(user);
  }
}
