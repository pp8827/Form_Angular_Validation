import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'Angular';
 user: User ={
  name:"change",
  lastName:"me",
  emailAddress:"change"
};
submit() {
  alert(`Submited with: ${this.user.name} ${this.user.lastName} ${this.user.emailAddress}`);
}
}
export interface User {
  name: string;
  lastName: string;
  emailAddress:string;
}