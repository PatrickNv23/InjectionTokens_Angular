import { Component, Inject, Optional } from '@angular/core';
import { API_GENERAL_URL, USER_TOKEN } from './injection_tokens/tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    @Optional() @Inject(API_GENERAL_URL) public generalApiUrl: string,
    @Optional() @Inject(USER_TOKEN) public userToken: string
  ) {

  }
  title = 'injection-token-angular';
}
