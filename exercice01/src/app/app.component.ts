import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'Exercice 01 !';

  secondes: number;
  counterSubscription: Subscription;

  constructor(  ) {  }

  ngOnInit() {
    const counter = Observable.interval(1000);

    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );

  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
  
}
