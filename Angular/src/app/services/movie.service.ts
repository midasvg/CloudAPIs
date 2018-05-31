import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MovieService{
    constructor(private http : HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin':"*"
        })
    };

    private url = 'http://localhost:5000/api'

    getMovies():Observable<IMovieResult[]>{
        return this.http.get<IMovieResult[]>(this.url + `/movies/`)
        
    }
    getMovieByID(movieID:number):Observable<IMovieResult>{
        return this.http.get<IMovieResult>(this.url + `/movies/${movieID}`)
    }

    getDirector():Observable<IDirectorResult[]>{
        return this.http.get<IDirectorResult[]>(this.url + `/directors/`)
    }


    updateMovie(updateMovie:IMovieResult): Observable<IMovieResult>{
        return this.http.put<IMovieResult>(this.url +  `/movies/`, updateMovie, this.httpOptions);
    }

    addDirector(newDirector:INewDirector):Observable<INewDirector>{
        return this.http.post<INewDirector>(this.url + `/directors/`, newDirector, this.httpOptions);
    }
}


export interface IMovieResult{
    id: number;
    title: string;
    length: number;
    genre: string;
    imdbscore: string;
    yearOfRelease: number;
    poster: string;
    director: IDirectorResult[];

}

export interface IDirectorResult{
    id: number;
    age: number;
    lastName: string;
    firstName: string;
}

export interface INewDirector{
    id: number;
    age: number;
    lastName: string;
    firstName: string;
}