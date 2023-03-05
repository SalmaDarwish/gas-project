import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
icon=document.getElementById("toggle-icon");
toggleIcon(){
  
  document.getElementById("toggle-icon")?.classList.toggle("fa-angle-up")
}
}
