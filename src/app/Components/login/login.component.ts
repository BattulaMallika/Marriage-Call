import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  otp: boolean = true;
  login: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  sendOtp() {
    this.otp = false;
    this.login = true;
  }

}
