import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cfc';


  dataSource = [
    {
      username: 'Artur',
      age: 28,
      title: 'Something strange'
    }
  ];
}
