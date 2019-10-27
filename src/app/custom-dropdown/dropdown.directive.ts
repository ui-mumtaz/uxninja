import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  constructor() { }
  @HostBinding('class.active') className;
  @HostListener('click') myClick(){
    this.className = !this.className;
    //this.className = true;
    // this.bgColor = 'blue';
    // this.myTitle = 'this is test title';
  }

}
