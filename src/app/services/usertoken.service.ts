import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsertokenService {

  constructor() { }


  calculateUserToken() {
    return 'Token de prueba para user injection token with services';
  }
}
