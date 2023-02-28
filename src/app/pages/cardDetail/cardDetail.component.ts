import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContainerComponent } from 'src/app/component/container/container/container.component';
import { GetValueService } from '../../getValue.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cardDetail',
  templateUrl: './cardDetail.component.html',
  styleUrls: ['./cardDetail.component.css']
})
export class CardDetailComponent implements OnInit {

  id: string | null = "";
  card: any


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {


  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3001/api/v1/card/${this.id}`).subscribe(data => {
      this.card = data;
      console.log(this.card)
    })
  }
  // getData() {
  //   const url = `http://localhost:3001/api/v1/card/${this.id}`
  //   console.log(url)
  //   return 
  // }
  // getCard() {
  //   this.getData().subscribe(data => {
  //     this.card = data
  //     console.log(data)

  //   })
  // }

}
