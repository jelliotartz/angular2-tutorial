import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Spice Heroes!</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'tour of spice heroes'
}