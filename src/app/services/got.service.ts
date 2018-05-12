import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GotService {

  private url = 'https://anapioficeandfire.com/api'

  constructor(private http : HttpClient) { }


  getBooks():Observable<IBooksResult>{
    return this.http.get<IBooksResult>(this.url + '/books')
  }

  getCharacters():Observable<ICharacResult[]>{
    return this.http.get<ICharacResult[]>(this.url + '/characters')
  }

  getHouses():Observable<IHousesResult[]>{
    return this.http.get<IHousesResult[]>(this.url + '/houses')
  }

}


  export interface ICharacResult {
    url: string;
    name: string;
    gender: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: string[];
    books: string[];
    povBooks: any[];
    tvSeries: string[];
    playedBy: string[];
  }



  export interface IBooksResult {
    url: string;
    name: string;
    isbn: string;
    authors: string[];
    numberOfPages: number;
    publisher: string;
    country: string;
    mediaType: string;
    released: string;
    characters: string[];
    povCharacters: string[];
  }




  export interface IHousesResult {
    url: string;
    name: string;
    region: string;
    coatOfArms: string;
    words: string;
    titles: string[];
    seats: string[];
    currentLord: string;
    heir: string;
    overlord: string;
    founded: string;
    founder: string;
    diedOut: string;
    ancestralWeapons: string[];
    cadetBranches: string[];
    swornMembers: string[];
  }
