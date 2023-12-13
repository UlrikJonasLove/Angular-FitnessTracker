import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: any;
  constructor() {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date();
    this.maxDate.setFullYear(currentYear - 18)
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
