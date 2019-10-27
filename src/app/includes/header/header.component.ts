import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  goBackLink; // For back link
  headerNav: Boolean; // For Menu
  headerLoginBlock: Boolean; // For Login Block
  headerContactDetail: Boolean; // For Contact Detail
  loggedInUser; // For Login Block

  constructor(private header: HeaderService, private router: Router) {
    // For Header Contact Detail
    this.header.headerContactDetail.subscribe(res => {
      this.headerContactDetail = res;
    })

    // For Menu
    this.header.headerNav.subscribe(res => {
      this.headerNav = res;
    })

    // For Go Back Link
    this.header.goBackLink.subscribe(res => {
      this.goBackLink = res;
    })

    // For Login Block
    this.header.headerLoginBlock.subscribe(res => {
      this.headerLoginBlock = res;
    })

    // For Contact Detail
    this.header.loggedInUser.subscribe(res => {
      this.loggedInUser = res;
    })

  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
  }

  onLoggedOut() {
    this.header.loggedInUser.next('');
    this.router.navigate(['login']);
  }
}
