import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.headerContactDetail.next(true)
    this.header.headerLoginBlock.next(false)
  }

  ngOnDestroy(): void {
    this.header.headerContactDetail.next(false)
    this.header.headerLoginBlock.next(true)
  }

}
