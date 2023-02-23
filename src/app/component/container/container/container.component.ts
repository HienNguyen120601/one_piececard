import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
status:boolean=false;
  type:string[]=["All","Red","Green","Blue","Purple","Black","Yellow"];
   handleCart()
   {
    this.status=!this.status;
   }
 
  
  constructor() { }

  ngOnInit() {
  }

}
