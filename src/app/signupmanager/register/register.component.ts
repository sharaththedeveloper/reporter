import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    passwrd: new FormControl(''),
    confirmpasswrd: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  } 
  onSubmit(){
    console.log(this.registerForm.value);
    //added to test
  }

}
