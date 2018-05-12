import { Component, OnInit } from '@angular/core';
import {IBooksResult, GotService}from '../services/got.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books : IBooksResult[];

  constructor(private _svc : GotService) { }

  ngOnInit() {
    this._svc.getBooks().subscribe(result => this.books = result);
  }

}
