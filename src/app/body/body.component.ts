import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {

nom ! : string;
capacité : number=90; 
race ! : string;
isEnable !: boolean;

constructor(){}

ngOnInit(): void {
  this.nom= "Dogui";
  this.race= "Allemand"
  this.isEnable=false;

  setTimeout(
    ()=>{
      this.isEnable=!this.isEnable;
    },
    10000
  )







}
retournerNom () {
return this.capacité;
}

retournerCap () {

}

}
