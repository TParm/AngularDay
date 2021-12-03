import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() content!: Book;
  @Output() detailClicked = new EventEmitter<Book>();
  titlecolor = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  onClick(click: MouseEvent){
    click.preventDefault();
    this.detailClicked.emit(this.content);
    console.log('Click Details-Link');
  }

}
