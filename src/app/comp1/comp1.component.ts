import { Component } from '@angular/core';
import { CustomService } from '../services/myservice.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [CustomService],
})
export class Comp1Component {}
