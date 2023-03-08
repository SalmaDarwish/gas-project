import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { loadCldr } from "@syncfusion/ej2-base";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Celestial-website';
  href:string=""
  constructor(private _activatedRoute:ActivatedRoute, private _router:Router){
 

    
    }
    ngOnInit(): void {
    
    }
    ngDoCheck() {
      this.href=window.location.href
      console.log(this.href)
      if(this.href.includes("stations-pipes-sales")|| this.href.includes("stations")){
        console.log("gamed")
        document.getElementById("stations")?.classList.add("active") 
      
      
      }   else{
        document.getElementById("stations")?.classList.remove("active")
      }
    
    }
}
