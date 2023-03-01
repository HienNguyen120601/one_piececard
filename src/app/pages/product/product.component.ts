import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCircleXmark, faEye, faPen } from "@fortawesome/free-solid-svg-icons"
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  faEye = faEye;
  faCircle = faCircleXmark;
  faPen = faPen;
  showImgView: boolean = false;
  cards: any;
  status: string = "";
  idDelete: any;
  showUpdate: boolean = false;
  name: string = ""
  power: string = ""
  effect: string = ""
  color: string = ""
  attribute: string = ""
  idUpdate: string = ""
  url: string = "http://localhost:3001/api/v1/card/"
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getCard(this.url)


  }
  getData(url: string) {
    return this.http.get(url)
  }
  getCard(url: string) {
    this.getData(url).subscribe(data => {
      this.cards = data
    })
  }
  deleteData(url: string) {
    return this.http.delete(url)
  }
  deleteCard(url: string) {
    this.deleteData(url).subscribe(res => {
      if (res) {
        const index = this.cards.indexOf(this.idDelete[0])
        if (index >= 0) {
          this.cards.splice(index, 1);
        }
      }
    })
  }
  searchByName(value: string) {
    if (value) {
      const nameUrl = `${this.url}name/${value}`
      this.getCard(nameUrl)
    }
    else {
      this.getCard(this.url)
    }
  }
  showImg(imgSource: string) {
    const imgBlock = document.querySelector(".showImg")
    if (imgBlock) {
      this.showImgView = true;
      imgBlock.innerHTML = `
      <img class="max-h-96 max-w-lg"
      src=${imgSource} alt="">
  `
    }
  }
  handleDelete(id: string) {
    this.idDelete = this.cards.filter((item: any) => {
      return item.id === id
    });
    const urlDelete = `${this.url}${id}`
    this.deleteCard(urlDelete)
  }

  showFormUpdate(id: string) {

    this.showUpdate = true
    this.idUpdate = id;
    const cardClicked = this.cards.filter((item: any) => {
      return item.id === id
    })
    this.name = cardClicked[0].name
    this.power = cardClicked[0].power
    this.effect = cardClicked[0].effect
    this.color = cardClicked[0].color
    this.attribute = cardClicked[0].attribute
  }
  updateCard(id: string) {
    const newUrl = `${this.url}${id}`
    const data = {
      name: this.name,
      power: this.power,
      effect: this.effect,
      color: this.color,
      attribute: this.attribute
    }
    this.http.put(newUrl, data).subscribe(res => {
      this.cards.map((item: any) => {
        if (item.id === id) {
          item.name = this.name;
          item.power = this.power;
          item.effect = this.effect;
          item.color = this.color;
          item.attribute = this.attribute
        }
      })
      this.showUpdate = false
    })
  }
  nameChange(e: string) {
    this.name = e;
  }
  powerChange(e: string) {
    this.power = e;
  }
  effectChange(e: string) {
    this.effect = e;
  }
  colorChange(e: string) {
    this.color = e;
  }
  attributeChange(e: string) {
    this.attribute = e;
  }
}
