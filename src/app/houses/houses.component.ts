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
  pageNumber: number = 1;

  characterID: number = 2;

  constructor(private _svc: GotService) { }

  ngOnInit() {
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
      })
    });
  }

  GetNext() {
    if (this.pageNumber == 9) {
      alert("You are already on the last page!");
    }
    else {
      this.pageNumber++;
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
        })
      });
    }


  }

  GetPrevious() {
    if (this.pageNumber == 1) {
      alert("You are already on the first page!");
    }
    else {
      this.pageNumber--;
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
        })
      }
      );

    }




  }
}