import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activeproject:string;
  constructor(private router :Router, private routes :ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params =>{
      this.activeproject = params.project;
      console.log(this.activeproject);
     })
     

  }
  // sidenavigator(){
  //   console.log("nav")
  //   this.router.navigate(["/user/dashboard",this.activeproject])
    
  // }
  sidenavigator(navlink){
    console.log(navlink);
    switch(navlink){
      case 'home':
          this.router.navigate(["/user/dashboard",this.activeproject])
          break;
      // case 'bugs':
      //     this.router.navigate(["../bugs"],{relativeTo : this.routes})
      //     break;
    }
    // this.router.navigate(["bugs"],{relativeTo : this.routes})
    
  }

}
