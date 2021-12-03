import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookCardComponent } from './book-card/book-card.component';
import { BookfilterPipe } from './book-filter/bookfilter.pipe';
import { BookComponent } from './book/book.component';

import { BooksRoutingModule } from './books-routing.module';


@NgModule({
  declarations: [BookComponent, BookCardComponent, BookfilterPipe],
  imports: [CommonModule],
  exports: [BookComponent]
})
export class BooksModule { }
