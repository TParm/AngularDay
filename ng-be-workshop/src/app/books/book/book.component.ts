import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookApiService } from '../book-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  searchTerm: string = '';

  constructor(private bookApi: BookApiService) {
    this.bookApi
    .getAll()
    .subscribe(booksFromApi => (this.books = booksFromApi));
  }

  ngOnInit(): void {}

  onSearch(event: Event) {
    const inputEl = event.target as HTMLInputElement;
    this.searchTerm = inputEl.value;
    console.log(this.searchTerm);
  }

  books: Book[] = [];

  onDetailClicked(book: Book) {
    console.log('detail was clicked ', book);
    console.table(book);
  }
}
