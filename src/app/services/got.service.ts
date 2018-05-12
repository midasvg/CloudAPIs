import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GotService {

  private url = 'https://anapioficeandfire.com/api'

  constructor(private http : HttpClient) { }


  getBooks():Observable<books.RootObject[]>{
    return this.http.get<books.RootObject[]>(this.url + '/books')
  }

  getCharacters():Observable<characters.RootObject[]>{
    return this.http.get<characters.RootObject[]>(this.url + '/characters')
  }

  getHouses():Observable<houses.RootObject[]>{
    return this.http.get<houses.RootObject[]>(this.url + '/houses')
  }

}

export namespace characters{

  export interface RootObject {
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

}


export namespace books{
  export interface RootObject {
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

}

export namespace houses{

  export interface RootObject {
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
}
