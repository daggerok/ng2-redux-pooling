import {
  Component,
  OnInit
} from '@angular/core';
import { NgRedux } from 'ng2-redux';
import {
  ActionType,
  AppState,
  INITIAL_STATE
} from '../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.styl' ]
})
export class HomeComponent implements OnInit {
  public state: AppState = INITIAL_STATE;

  constructor(private ngRedux: NgRedux<AppState>) {
  }

  public ngOnInit() {
    // input
    this.ngRedux.subscribe(() => {
      setTimeout(() => {
        console.log('waiting input');
        this.state = this.ngRedux.getState();
      }, 2000);
    });
  }

  public increment() {
    // output
    setTimeout(() => {
      console.log('waiting output');
      this.ngRedux.dispatch({
        type: ActionType.INCREMENT,
      });
    }, 3000);
  }
}
