import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-count',
  templateUrl: './orbit-count.component.html',
  styleUrls: ['./orbit-count.component.css']
})
export class OrbitCountComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

// 1 check if type is == to satellite.type
// 2 count how many types of particular satellite
  countType(type :string ): number{
    let num = 0;
    for(let i = 0; i < this.satellites.length; i++){
      
        if(type == this.satellites[i].type){
          num++;
      }
    }
    return num;
  }
}
