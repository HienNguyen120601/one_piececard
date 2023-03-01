import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  p: number = 1
  cards: any;
  status: boolean = false;
  type: string[] = ["All", "Red", "Green", "Blue", "Purple", "Black", "Yellow"];
  color: boolean = sessionStorage.getItem('color') ? true : false;
  url: string = "http://localhost:3001/api/v1/card/"
  constructor(private http: HttpClient, private element: ElementRef) {
  }
  ngOnInit() {
    // if (sessionStorage.getItem('color') != "All") {
    //   const colorUrl = !this.color ? "http://localhost:3001/api/v1/card/" : "http://localhost:3001/api/v1/card/color/" + sessionStorage.getItem('color')
    //   this.getCard(colorUrl);
    // }
    // else {
    //   this.getCard(this.url)
    // }
    const urlInHome = "http://localhost:3001/api/v1/card/"
    const url = sessionStorage.getItem('url')
    if (url) {
      this.getCard(url)
    }
    else {
      this.getCard(urlInHome)
    }
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
      sessionStorage.setItem('url', urlColor)
      this.getCard(urlColor)
    }
    else {
      this.getCard(this.url)
      sessionStorage.setItem('url', this.url)
    }
  }
  searchByName(name: string) {
    if (name) {
      const color = sessionStorage.getItem("color")

      if (color) {
        console.log(color)
        if (color != "All") {
          const nameUrl = `${this.url}multi/${name}/${color}`
          sessionStorage.setItem('url', nameUrl)
          sessionStorage.removeItem("color")
          this.getCard(nameUrl)

        }
        else {
          const nameUrl = `${this.url}name/${name}`
          this.getCard(nameUrl)

        }
      }
      else {
        const nameUrl = `${this.url}name/${name}`
        this.getCard(nameUrl)
      }
    }
    else {
      this.getCard(this.url)
    }

  }


}
