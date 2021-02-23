import { Component } from '@angular/core';
import { birthdays, workAnniversaries } from './models/data.interface';
import * as jsonData from '../assets/jsondata/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  content: any = (jsonData as any).default;

  panelOpenState = false;

  title = 'ribbon-bulletin';

  birthdays = birthdays;

  workAnniversaries = workAnniversaries;

  ngOnInit() {
    console.log(this.content);
  }

}


