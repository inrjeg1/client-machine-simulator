import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {MenubarModule} from 'primeng/menubar'
import {DataTableModule} from 'primeng/datatable'
import {DialogModule} from 'primeng/dialog'
import {PanelModule} from 'primeng/panel'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {AppRoutingModule,routingComponents} from './app-routing-module'
import {AngularMaterialModule} from './angular-material-module'
import {ButtonModule} from 'primeng/button';
import { DriverComponent } from './driver/driver.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DriverComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,DataTableModule,
    PanelModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DialogModule,
    CommonModule,
    AngularMaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
