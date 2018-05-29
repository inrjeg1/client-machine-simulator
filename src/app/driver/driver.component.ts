import { Component, OnInit } from '@angular/core';
import {DriverService} from '../driver/driver.service'
import {Delay} from '../driver/delay'

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private driverService:DriverService ) { }

  ngOnInit() {
  }

  resetAll():void{
    this.driverService.resetAll().subscribe();
  }

  setDelay(delay:number):void{   
    console.log(delay);
    this.driverService.setDelay(new Delay(delay)).subscribe();
  }

}
