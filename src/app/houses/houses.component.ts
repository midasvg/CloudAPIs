import { Component, OnInit } from '@angular/core';
import { IHousesResult, GotService } from '../services/got.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses : IHousesResult[];

  constructor(private _svc : GotService) { }

  ngOnInit() {
    this._svc.getHouses().subscribe(result => {this.houses = result; 
      this.houses.forEach(s=> { s.id = s.url.slice(41)})});
  }

}
