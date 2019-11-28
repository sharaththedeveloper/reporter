import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-siginin',
  templateUrl: './siginin.component.html',
  styleUrls: ['./siginin.component.scss']
})
export class SigininComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl(''),
    passwrd: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.signinForm.value);
  }
}
