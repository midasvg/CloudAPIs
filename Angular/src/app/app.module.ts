import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksComponent } from './books/books.component';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GotService } from './services/got.service';
import { FormsModule } from '@angular/forms';
import { FilmComponent } from './film/film.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    HomeComponent,
    PageNotFoundComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'books', component: BooksComponent},
      { path: 'characters', component: CharactersComponent},
      { path: 'houses', component: HousesComponent},
      { path: 'ownapi', component: FilmComponent},
      { path: '', component: HomeComponent},
      { path: "**", component: PageNotFoundComponent}
    ],{ useHash: true }),
    HttpClientModule,
    FormsModule

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [GotService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
