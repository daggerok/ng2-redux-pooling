import { Component } from '@angular/core';
import {
  AppState,
  INITIAL_STATE,
  reducer
} from './store';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app works!';

  constructor(private ngRedux: NgRedux<AppState>) {
    this.ngRedux.configureStore(reducer, INITIAL_STATE);
  }
}
