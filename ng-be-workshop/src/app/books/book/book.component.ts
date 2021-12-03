import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  searchTerm: string="";

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: Event){
    const inputEl = event.target as HTMLInputElement;
    this.searchTerm = inputEl.value;
    console.log(this.searchTerm);
  }

  content: Book = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...'
  };

  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: "How to Win Friends and Influence ..."
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    }
  ]

  onDetailClicked(book: Book){
    console.log("detail was clicked ", book);
    console.table(book);
  }

}