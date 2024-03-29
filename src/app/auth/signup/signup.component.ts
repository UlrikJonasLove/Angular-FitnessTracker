import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date();
    this.maxDate.setFullYear(currentYear - 18)
  }

  onSubmit(form: NgForm) {
    // in the form we add name properties, where the name is email and password, so then we can get the values from those inputs
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
