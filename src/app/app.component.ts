import { Component, OnInit } from '@angular/core';
// import { CustomService } from './services/myservice.service';
import { Observable, from, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[CustomService]
})
export class AppComponent implements OnInit {
  title = 'my-angular';
  public name = 'manoj santra';
  // myObservable = new Observable((observer) => {
  //   console.log('observable start : ');
  //   observer.next('hello');
  //   observer.next('manoj');
  //   observer.next("what's");
  //   observer.next('up');
  // });
  array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  myObservable = from(this.array2);
  newObservable = this.myObservable.pipe(map((val) => val * 5));
  newObservable2 = this.newObservable.pipe(filter((val) => val % 2 === 0));
  ngOnInit() {
    this.newObservable2.subscribe((value) => {
      console.log('observer val : ', value);
    });
  }
}
