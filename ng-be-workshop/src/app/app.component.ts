import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-be-workshop';

  content: Book = {
    title: 'How to win friends',
    author: 'Dale Carnegie',
    abstract: 'In this book ...'
  };

  onDetailClicked(book: Book){
    console.log("detail was clicked ", book);
    console.table(book);
  }
}
