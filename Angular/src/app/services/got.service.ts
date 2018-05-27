import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GotService {

  private url = 'https://anapioficeandfire.com/api';
  Information: IBooksResult;

  constructor(private http : HttpClient) { }

  getBooks(pageId: number):Observable<IBooksResult[]>{
    return this.http.get<IBooksResult[]>(this.url + `/books?page=${pageId}&pageSize=9`)
  }

  getBookInformation(bookId:number): Observable<IBooksResult>{
    return this.http.get<IBooksResult>(this.url + `/books/${bookId}`);
  }

  getCharacters(pageId: number):Observable<ICharacResult[]>{
    return this.http.get<ICharacResult[]>(this.url + `/characters?page=${pageId}&pageSize=50`)
  }

  getCharacter(characterId: number): Observable<ICharacResult>{
    return this.http.get<ICharacResult>(this.url + `/characters/${characterId}`)
  }

  getCharacterByName(characterName: string): Observable<ICharacResult[]>{
    return this.http.get<ICharacResult[]>(this.url + `/characters?name=${characterName}`)
  }

  getHouses(pageId: number):Observable<IHousesResult[]>{
    return this.http.get<IHousesResult[]>(this.url + `/houses?page=${pageId}&pageSize=48`)
  }

  getHouse(houseId: number): Observable<IHousesResult>{
    return this.http.get<IHousesResult>(this.url + `/houses/${houseId}`)
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
    id: string;
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
    id: string;
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
    currentLordString : string;
  }
