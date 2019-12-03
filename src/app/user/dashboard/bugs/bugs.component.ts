import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  activeproject: any;

  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.parent.params.subscribe(params=>{
      console.log("params",params);
    })
  }

}
