import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_GENERAL_URL, USER_TOKEN } from './injection_tokens/tokens';
import { UsertokenService } from './services/usertoken.service';


export function getGeneralApiUrl() {
  const url = "https://urlgeneralapi.com/api/v1/";
  return url;
}

export function getUserToken(userToken: UsertokenService) {
  return userToken.calculateUserToken();
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: API_GENERAL_URL,
      // funcion que se ejecutará y su resultado será el valor de nuestro injection token
      useFactory: getGeneralApiUrl
    },
    {
      provide: USER_TOKEN,
      useFactory: getUserToken,
      deps: [UsertokenService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
