import { Component, OnInit } from '@angular/core';
import { IHousesResult, ICharacResult, GotService } from '../services/got.service';
import { getOriginalError } from '@angular/core/src/errors';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses: IHousesResult[];
  character: string;
  pageNumber: number = 1;

  characterID: number = 2;

  constructor(private _svc: GotService) { }

  ngOnInit() {
   this.GetHouses();
  }

  GetHouses(){
    this._svc.getHouses(this.pageNumber).subscribe(result => {
      this.houses = result;
      this.houses.forEach(s => {
        s.id = s.url.slice(41);
        if (s.currentLord != "") {
          this._svc.getCharacter(+(s.currentLord.slice(45))).subscribe(t => {
            s.currentLordString = t.name;
          })
        }
        else {
          s.currentLordString = "Currently unknown";
        }
        if(s.titles[0] ==""){
          s.titles[0] = "No titles known"
        }
        if(s.words ==""){
          s.words = "None";
        }
        if(s.overlord !==""){
          this._svc.getHouse(+(s.overlord.slice(41))).subscribe(h =>{
            s.overlord = h.name;
          })
        }
        else{
          s.overlord = "None";
        }
      })
    });
  }

  GetNext() {
    if (this.pageNumber == 9) {
      alert("You are already on the last page!");
    }
    else {
      this.pageNumber++;
      this.GetHouses();
    }
  }

  GetPrevious() {
    if (this.pageNumber == 1) {
      alert("You are already on the first page!");
    }
    else {
      this.pageNumber--;
      this.GetHouses();
    }
  }

  SetPageNr(pageNr:number){
    this.pageNumber = pageNr;
    this.GetHouses();
  }
}