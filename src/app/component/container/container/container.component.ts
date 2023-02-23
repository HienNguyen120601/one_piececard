import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  cards:any;
  status:boolean=false;
  type:string[]=["All","Red","Green","Blue","Purple","Black","Yellow"];
   handleCart()
   {
    this.status=!this.status;
   }
   constructor(private http: HttpClient) {
    this.getCard();
   }

  ngOnInit() {
  }
  getData() {
    return this.http.get("http://localhost:3001/api/v1/card/")
  }
  getCard()
  {
    this.getData().subscribe(data=>{
     this.cards=data
    })
  }

}
