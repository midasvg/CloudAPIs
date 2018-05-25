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
    
      this._svc.getCharacters(1).subscribe(result => {
        this.characters = result
        this.characters.forEach(s => {
          if (s.name == "") {
            s.name = "Unknown";
          }
        })
      });
      

  }

  Search(searchInput: string) {
    this._svc.getCharacter(0).subscribe(result =>{
      this.character = result
      if(this.character.name == searchInput){
        result.name = this.character.name;
        result.born = this.character.born;
        result.died = this.character.died;
      }
    })

  }

}
