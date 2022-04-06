import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {

  loggedIn: boolean = false;
  formEnabled: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    this.switchAnimation();
  }

  private switchAnimation(){
    this.loggedIn = true;
    setTimeout(() => this.formEnabled = true, 200);
  }

}
