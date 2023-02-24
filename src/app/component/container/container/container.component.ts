import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  cards: any;
  status: boolean = false;
  type: string[] = ["All", "Red", "Green", "Blue", "Purple", "Black", "Yellow"];
  color: boolean = sessionStorage.getItem('color') ? true : false;
  url: string = "http://localhost:3001/api/v1/card/"

  constructor(private http: HttpClient, private element: ElementRef) {
    if (sessionStorage.getItem('color') != "All") {
      const colorUrl = !this.color ? "http://localhost:3001/api/v1/card/" : "http://localhost:3001/api/v1/card/color/" + sessionStorage.getItem('color')
      this.getCard(colorUrl);
    }
    else {
      this.getCard(this.url)
    }
  }
  ngOnInit() {
  }
  handleCart() {
    this.status = !this.status;
  }
  getData(url: string) {
    return this.http.get(url)
  }
  getCard(url: string) {
    this.getData(url).subscribe(data => {
      this.cards = data

    })
  }
  handleFilter(color: string) {
    sessionStorage.setItem("color", color)


    if (color != "All") {
      const urlColor: string = this.url + "color/" + color
      this.getCard(urlColor)
    }
    else {
      this.getCard(this.url)
    }

  }
  searchByName(name: string) {
    if (name) {
      const nameUrl = `${this.url}name/${name}`
      this.getCard(nameUrl)

    }
  }

}
