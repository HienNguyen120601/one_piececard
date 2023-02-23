import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  
  title = 'onepiece_cart';
  ngOnInit(): void {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'http://localhost:3001/api/v1/card/',
      mode:'no-cors'
    });
    this.http
      .get<any>('http://localhost:3001/api/v1/card/', {
        headers: headers
      })
      .subscribe(data => {
        console.log(data)
      });
    
  }
}
