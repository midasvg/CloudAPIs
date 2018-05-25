import { Component, OnInit } from '@angular/core';
import { ICharacResult, GotService } from '../services/got.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: ICharacResult[];
  character: ICharacResult;
  searchInput: string;


  constructor(private _svc: GotService) { }

  ngOnInit() {
    /*
    this._svc.getCharacters(1).subscribe(result => {
      this.characters = result
      this.characters.forEach(s => {
        if (s.name == "") {
          s.name = "Unknown";
        }
      })
    });
    */
  }

  Search() {
    this._svc.getCharacterByName(this.searchInput).subscribe(result => {
      this.character = result;
    })
  }
}
