import { Component, OnInit } from '@angular/core';
import {ContentService} from './content.service'
import {Activity} from './activity'
import {SystemCode} from './systemcode'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
systemcodes:SystemCode[];
selectedSystemCode:SystemCode;
displayActivities:boolean=false
activities:Activity[];
constructor(private contentService:ContentService) { }

  ngOnInit() {
    this.getSystemCodes();
  }

  getSystemCodes():void{
    this.contentService.getSystemCodes().subscribe(systemcodes=>this.systemcodes=systemcodes);
  }

  getKnownActivities(systemcode:string):void{
    this.contentService.getKnonwnActivities(systemcode).subscribe(activities=>this.activities=activities);
  }

  onRowSelect(event){
    this.displayActivities=true;
    this.getKnownActivities(this.selectedSystemCode.code);

  }

}
