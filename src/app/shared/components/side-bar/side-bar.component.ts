import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent  implements OnInit {
icon=document.getElementById("toggle-icon");
toggleIcon(){
  
  document.getElementById("toggle-icon")?.classList.toggle("fa-angle-up")
}
toggleIcon2(){
  
  document.getElementById("toggle-icon2")?.classList.toggle("fa-angle-up")
}
href:string=""
constructor(private _activatedRoute:ActivatedRoute, private _router:Router){
 
 

}
ngOnInit(): void {

}
}
