import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.scss']
})
export class TelevisionComponent implements OnInit, OnDestroy {

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
