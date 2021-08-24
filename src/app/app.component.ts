import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // here we can declare our data model
  title = 'routed-app';
  today = new Date()
  user = 'Ada'
  askCookieConsent = true
  fbImage = ''
  userStockName = ''
  userStockPrice = 0

  // In ES6 functions that belong to classes are written like this
  // agreeCookie function belongs to AppComponent class
  agreeCookie(){
    this.askCookieConsent = false
  }
}
