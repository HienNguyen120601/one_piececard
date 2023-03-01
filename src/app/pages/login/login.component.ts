import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = ""
  password: string = ""
  message = ""
  constructor(public router: Router) {
    if (sessionStorage.getItem("islogin") === "true") {
      this.router.navigate(['/admin'])
    }
  }

  ngOnInit() {
  }
  emailChange(e: string) {
    this.email = e;
  }
  passwordChange(e: string) {
    this.password = e;
  }
  login() {
    if (this.email === "admin@gmail.com" && this.password === "123") {
      this.router.navigate(['/admin'])
      sessionStorage.setItem("islogin", "true")
    }
    else {
      this.message = "Somthing went wrong"
    }

  }

}
