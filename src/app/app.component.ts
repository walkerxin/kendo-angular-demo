import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = 'my-app';
  isFree = false;
  logArr: Date[] = []

  onGoToClearUsername(): void {
    this.username = '';
  }

  genLog(): void {
    this.logArr.push(new Date());
  }

  getLogStyle(i: number): Object {
    return i >= 5 ? { 'background-color': 'blue' } : Object.create(null);
  }
}
