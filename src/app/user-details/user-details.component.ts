import { Component, OnInit } from '@angular/core';
import { IUserList } from '../common/userlist.interface';
import { userService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userDetails: IUserList | undefined;
  constructor(private uService: userService) {}
  ngOnInit() {
    this.uService.onShowUserEvent.subscribe(
      (data: IUserList) => (this.userDetails = data)
    );
  }
}
