import { Component, OnInit } from '@angular/core';
import { MovieService, IMovieResult, IDirectorResult, INewDirector } from '../services/movie.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  movies: IMovieResult[];
  directors: IDirectorResult[];

  /*
  newFirstName;
  newLastName;

  updateMovieID;
  updateMovieTitle;
  updateMovieLength;
  updateMovieScore;
  updateMovieGenre;
  updateMovieRelease;
  */

  constructor(private svc: MovieService) { }

  ngOnInit() {

  }

  GetMovies() {
    this.svc.getMovies().subscribe(result => {
      this.movies = result;
    })
  }

  GetDirectors() {
    this.svc.getDirector().subscribe(result => {
      this.directors = result;
    })
  }
/*
  addDirector(){
    var newDirector: INewDirector = {id: 5, age: 75, firstName: "Martin", lastName:"Scorcese"};
    this.svc.addDirector(newDirector).subscribe();
  }

  UpdateMovie(){

  }
*/
}
