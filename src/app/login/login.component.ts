import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private header: HeaderService, private router: Router) { }

  ngOnInit() {
  }

  onLoggedIn(txt, pwd){
    if(pwd.value == '123') {
      alert(txt.value);
      this.header.loggedInUser.next(txt.value);
      this.router.navigate(['home']);
    } else {
      alert('Please Fill correct Details....')
    }
    
  }

}
