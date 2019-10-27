import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit, OnDestroy {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.headerNav.next(false);
    this.header.goBackLink.next({text:'Back to Products', url:'/products'});
  }

  ngOnDestroy(): void {
    this.header.headerNav.next(true);
    this.header.goBackLink.next({text:'', url:''});
  }

}
