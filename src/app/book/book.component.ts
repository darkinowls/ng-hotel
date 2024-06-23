import {Component, OnInit} from '@angular/core';
import {Book} from "../models/book";
import { v4 as uuidv4 } from 'uuid';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  private _booksKey = 'books'

  books: Book[] = []

  ngOnInit() {
    this.books = this.loadFromLocalStorage()
  }

  private loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this._booksKey) || '[]')
  }

  saveInLocalStorage() {
    localStorage.setItem(this._booksKey, JSON.stringify(this.books))
  }


  newBook: Book = {
    id: uuidv4(),
    title: '',
    author: ''
  }

  private initNewBook() {
    this.newBook = {
      id: uuidv4(),
      title: '',
      author: ''
    }
  }

  addBook() {
    this.books.push(this.newBook)
    this.initNewBook()
    this.saveInLocalStorage()
  }

  remove(index: number){
    this.books.splice(index, 1)
    this.saveInLocalStorage()
  }


}
