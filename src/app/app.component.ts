import { Component } from '@angular/core';

@Component({
  selector: 'componenta',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name:string = "Azeem";
  age:number = 22;

}

