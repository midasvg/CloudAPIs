import { Component, OnInit } from '@angular/core';
import { IHousesResult, ICharacResult, GotService } from '../services/got.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses: IHousesResult[];
  character: string;

  characterID: number = 2;

  constructor(private _svc: GotService) { }

  ngOnInit() {
    this._svc.getHouses(1).subscribe(result => {this.houses = result;
      this.houses.forEach(s => {s.id = s.url.slice(41)})
      this._svc.getCharacter(this.characterID).subscribe(h => {
        this.character = h[1].name;
      })});
        /*
        if(s.currentLord == ""){
          s.currentLord = "Unknown";
        }
        */
      }
}