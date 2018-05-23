import { Component, OnInit } from '@angular/core';
import { IBooksResult, GotService } from '../services/got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: IBooksResult[];
  pageNumber: number = 1;
  pageOne: boolean = true;
  pageTwo: boolean = false;
  active:boolean = false;

  constructor(private _svc: GotService) { }

  ngOnInit() {
    this._svc.getBooks(this.pageNumber).subscribe(result => this.books = result);
  }

  GetNext() {
    if (this.pageOne == true) {
      this.pageNumber++;
      this.pageTwo = true;
      this.pageOne = false;
      this._svc.getBooks(this.pageNumber).subscribe(result => this.books = result);
    }
    else {
      console.log("You are already on the last page.");
    }
  }

  GetPrevious() {
    if (this.pageTwo == true) {
      this.pageNumber--;
      this.pageOne = true;
      this.pageTwo = false;
      this._svc.getBooks(this.pageNumber).subscribe(result => this.books = result);
    }
    else {
      console.log("You are already on the first page.");
    }
  }

}
