import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() times: number;
  numberOfTimes = 0;

  tickByOne(): void {
    this.numberOfTimes = this.numberOfTimes + 1;
  }

  constructor() {}
  ngOnInit() {
    if (this.times) {
      this.numberOfTimes = this.times;
    }
  }
}