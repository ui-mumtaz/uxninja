import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  goBackLink: Boolean = false; // For back link
  headerNav: Boolean = true; // For Menu
  headerLoginBlock: Boolean = false; // For Login Block
  headerContactDetail: Boolean = true; // For Contact Detail
  loggedInUser: Boolean = true; // For Contact Detail

  constructor(private header: HeaderService) {
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

  }

  ngOnInit() {
  }

}
