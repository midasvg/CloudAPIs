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
  active: boolean = false;

  constructor(private _svc: GotService) { }

  ngOnInit() {
    this._svc.getBooks(this.pageNumber).subscribe(result => this.books = result);
  }

  GetNext() {
    if (this.pageNumber == 1) {
      this.pageNumber++;
      this._svc.getBooks(this.pageNumber).subscribe(result => this.books = result);
    }
    else {
      alert("You are already on the last page.");
    }
  }

  GetPrevious() {
    if (this.pageNumber == 2) {
      this.pageNumber--;
      this._svc.getBooks(this.pageNumber).subscribe(result => this.books = result);
    }
    else {
      alert("You are already on the first page.");
    }
  }


}
