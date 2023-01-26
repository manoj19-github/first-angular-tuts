import { Component, OnInit } from '@angular/core';
import { IUserList } from '../common/userlist.interface';
import { userService } from '../services/users.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private uService: userService) {}

  userList: IUserList[] = [];
  ngOnInit() {
    this.userList = this.uService.userList;
  }
  showUserDetails(user: IUserList) {
    this.uService.showUserDetails(user);
  }
}
