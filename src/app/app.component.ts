import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar'
import {MenuItem} from 'primeng/api'
import {Observable,of} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 items: MenuItem[]; 
constructor(){ }

 ngOnInit(){
  this.items = [{
  label:'Machines',
  items:[{label:'View Machines',routerLink:'machines'}]
  },{
    label:'Contents',
    items:[{label:'View System Codes',routerLink:'contents'}]
  },{
    label:'Drivers',routerLink:'drivers'
  }]; 
 }

}
