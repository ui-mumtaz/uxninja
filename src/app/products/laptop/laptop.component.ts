import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit, OnDestroy {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    // this.header.headerNav.next(false);
    // this.header.goBackLink.next({text:'Back to Products', url:'/products'});
  }

  ngOnDestroy(): void {
    // this.header.headerNav.next(true);
    // this.header.goBackLink.next({text:'', url:''});
  }

}
