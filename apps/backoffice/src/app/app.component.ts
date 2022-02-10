import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'panaya-workshop2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'backoffice';
  
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe();
    
  }
}
