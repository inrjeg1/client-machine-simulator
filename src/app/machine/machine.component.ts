import { Component, OnInit } from '@angular/core';
import {DataTableModule} from 'primeng/datatable'
import {MachineService} from './machine.service'
import {ContentService} from '../content/content.service'
import {Machine} from './machine'
import {LogEntry} from '../content/logentry'
import {Activity} from '../content/activity'
import {Observable,of} from 'rxjs';


@Component({
  selector: 'machine-list',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
 machines:Machine[];
 machineLogs: LogEntry[];
 activities:Activity[];
 selectedMachine:Machine;
 selectedLogEntry:LogEntry;
 displayLogEntry:boolean=false;
 displayActivities:boolean=false;
 selectedSystemCode :string ='';
 
constructor(private machineService :MachineService,private contentService:ContentService){ }
ngOnInit(){
  this.getMachines();
}

getMachines():void{
  this.machineService.getMachines().subscribe(machines =>this.machines=machines);
}

readMachineLogs(name:string):void {
name = name.trim();
if(!name) {return;}
this.machineService.readMachineLogs(name).subscribe(machineLogs=>this.machineLogs=machineLogs);
}

observeMachineLogs(name:string):void {
if(!name) {return;}
this.machineService.observeMachineLogs(name).subscribe(machineLogs=>this.machineLogs=machineLogs);
}

onRowSelectMachine(event){
  this.displayLogEntry=true;
  this.readMachineLogs(this.selectedMachine.name);
}

refreshLog(){
  if(!this.selectedMachine) {return;}
  this.readMachineLogs(this.selectedMachine.name);
  console.log("--->"+this.selectedMachine.name);
}

getKnownActivities(systemCode:string):void{
  this.contentService.getKnonwnActivities(systemCode).subscribe(activities=>this.activities=activities);
}

onRowSelectLogEntry(event){
  this.displayActivities =true;
//Parse Log entry and get Sytem code
const[datePart,timePart,systemCodePart,infoPart1,infoPart2] = this.selectedLogEntry.line.split(" ");
this.selectedSystemCode = systemCodePart;
console.log(systemCodePart);
this.getKnownActivities(this.selectedSystemCode);
}

runExec(activity:Activity){
  console.log(activity.exec)
  this.machineService.runExec(this.selectedMachine.name,activity)
}

}
