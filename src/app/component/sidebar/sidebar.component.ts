import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faHouse = faHouse;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  logOut() {
    sessionStorage.removeItem("islogin")
    this.router.navigate(['/'])
  }
}
