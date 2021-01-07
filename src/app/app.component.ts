import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  
  constructor() {
    this.sourceList = [];
    let satellitesUrl: string = 'https://handlers.education.launchcode.org/static/satellites.json';  
    this.displayList = [];
    
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites: object = data.satellites;
          // TODO: loop over satellites
          for(let i in fetchedSatellites){
            // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            let displaySatellite: object = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
            this.sourceList.push(displaySatellite); 
          }
          this.displayList = this.sourceList.slice(0);
       }.bind(this));
    }.bind(this));
 
 }
   search(searchTerm: string): void {
      let matchingSatellites: Satellite[] = [];
      searchTerm = searchTerm.toLowerCase();
      for(let i=0; i < this.sourceList.length; i++) {
         let name = this.sourceList[i].name.toLowerCase();
         let type = this.sourceList[i].type.toLowerCase();
         if (name.indexOf(searchTerm) >= 0) {
         matchingSatellites.push(this.sourceList[i]);
         }else if (type.indexOf(searchTerm) >= 0) {
         matchingSatellites.push(this.sourceList[i]);
         }else;
      }
   // assign this.displayList to be the array of matching satellites
   // this will cause Angular to re-make the table, but now only containing matches
   this.displayList = matchingSatellites;
   }
}
