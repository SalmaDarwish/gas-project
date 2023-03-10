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
    // Handling changes in sidebar according to actived Router
    ngDoCheck() {
      this.href=window.location.href
      if(this.href.includes("station")){
        document.getElementById("stations")?.classList.add("active") 
      
      
      }   else{
        document.getElementById("stations")?.classList.remove("active")
      }

      if(this.href.includes("devices")){
        document.getElementById("fa-desktop")?.classList.add("active-icon")
      } else{
        document.getElementById("fa-desktop")?.classList.remove("active-icon")

      }
      if(this.href.includes("pipes")){
        document.getElementById("fa-pump-soap")?.classList.add("active-icon")
      } else{
        document.getElementById("fa-pump-soap")?.classList.remove("active-icon")

      }
      if(this.href.includes("accessories")){
        document.getElementById("fa-sitemap")?.classList.add("active-icon")
      } else{
        document.getElementById("fa-sitemap")?.classList.remove("active-icon")

      }
    
    }
}
