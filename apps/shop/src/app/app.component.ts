import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'panaya-workshop2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shop';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe();
  }

  
}
