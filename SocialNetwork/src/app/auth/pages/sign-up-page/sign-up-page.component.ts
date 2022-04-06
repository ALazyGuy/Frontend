import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  registered: boolean = false;
  formEnabled: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register(event: Event) {
    event.preventDefault();
    this.switchAnimation();
  }

  toSignIn(){
    this.router.navigateByUrl('/auth/sign-in');
  }

  private switchAnimation(){
    this.registered = true;
    setTimeout(() => this.formEnabled = true, 200);
  }

}
