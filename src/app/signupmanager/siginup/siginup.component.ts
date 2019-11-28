import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.component.html',
  styleUrls: ['./siginup.component.scss']
})
export class SiginupComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.signupForm.value);
  }

}
