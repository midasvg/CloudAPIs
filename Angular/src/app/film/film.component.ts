import { Component, OnInit } from '@angular/core';
import { MovieService, IMovieResult } from '../services/movie.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  movies: IMovieResult[];

  constructor(private svc: MovieService) { }

  ngOnInit() {
    this.svc.getMovies().subscribe(result =>{
      this.movies = result;
    })

  }

  GetMovies(){
   
  }

}
