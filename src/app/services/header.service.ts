import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  headerContactDetail = new BehaviorSubject(false) // For Header contact detail
  headerNav = new BehaviorSubject(true) // For Header contact detail
  goBackLink = new BehaviorSubject({text:'', url:''})  // For Back link
}
