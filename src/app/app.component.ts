import { Component } from '@angular/core';
// import { CustomService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[CustomService]
})
export class AppComponent {
  title = 'my-angular';
  public name = 'manoj santra';
}
