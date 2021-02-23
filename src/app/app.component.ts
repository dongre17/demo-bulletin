import { Component } from '@angular/core';
import { birthdays, workAnniversaries } from './models/data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  panelOpenState = false;

  title = 'ribbon-bulletin';

  birthdays = birthdays;

  workAnniversaries = workAnniversaries;

}
