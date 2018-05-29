import { Component, OnInit } from '@angular/core';
import { IBooksResult, GotService } from '../services/got.service';
import { map } from 'rxjs/operators';
import { element } from 'protractor';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: IBooksResult[];
  book: IBooksResult;
  pageNumber: number = 1;
  active: boolean = false;
  bookID: number;

  constructor(private _svc: GotService) { }

  ngOnInit() {
    var g = 1;
    this._svc.getBooks(this.pageNumber).pipe(map((element: IBooksResult[]) => 
    { 
      element.forEach(e => e.id = g++);
      return element;
    } )).subscribe(result => {
      //console.log(this.books);
      this.books = result
      console.log(this.books);
    });
  }


  GetNext() {
    if (this.pageNumber == 1) {
      this.pageNumber++;
      var g = 10;
      this._svc.getBooks(this.pageNumber).pipe(map((element: IBooksResult[]) => 
      { 
        element.forEach(e => e.id = g++);
        return element;
      } )).subscribe(result => {
        //console.log(this.books);
        this.books = result
        console.log(this.books);
      });
    }
    else {
      alert("You are already on the last page.");
    }
  }

  GetPrevious() {
    if (this.pageNumber == 2) {
      this.pageNumber--;
      var g = 1;
    this._svc.getBooks(this.pageNumber).pipe(map((element: IBooksResult[]) => 
    { 
      element.forEach(e => e.id = g++);
      return element;
    } )).subscribe(result => {
      //console.log(this.books);
      this.books = result
      console.log(this.books);
    });
  }
    else {
      alert("You are already on the first page.");
    }
  }

  SetBookID(bookNumber: number) {
    this.bookID = bookNumber;
    console.log(this.bookID);
    this._svc.getBookInformation(this.bookID).subscribe(result => {
      this.book = result;
    })
  }


}
