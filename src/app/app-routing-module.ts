import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MachineComponent} from './machine/machine.component';
import {ContentComponent} from './content/content.component'
import {DriverComponent} from './driver/driver.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'



const routes: Routes = [  
  {path:'',redirectTo:'/contents',pathMatch:'full'},
  {path:'machines',component:MachineComponent},
  {path:'contents',component:ContentComponent},
  {path:'drivers',component:DriverComponent},
  {path:'**',component:PageNotFoundComponent}    
];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponents =[MachineComponent,ContentComponent]
