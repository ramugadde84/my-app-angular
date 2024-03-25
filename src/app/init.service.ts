import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() { }

  process(): string {
    console.log("Init Service process");
    return 'hai';
  }
}
