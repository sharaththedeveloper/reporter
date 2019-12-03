import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.scss']
})
export class DashboardhomeComponent implements OnInit {
activeproject:string;
  constructor(private router :Router, private routes :ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params =>{
      this.activeproject = params.project;
     })
     console.log(this.routes.snapshot)
  }

}
