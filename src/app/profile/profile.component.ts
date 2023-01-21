import { Component, Input } from '@angular/core';
interface IProducts {
  name: string;
  role: string;
  salary: number;
  id: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  @Input() profile: IProducts = {} as IProducts;
  @Input() i: number = 0;
}
