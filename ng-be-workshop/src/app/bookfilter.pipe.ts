import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookfilter'
})
export class BookfilterPipe implements PipeTransform {

  transform(books: Book[],  searchTerm: string): Book[] {
    return books.filter(
      book => book.title.toLocaleLowerCase().includes(searchTerm)
    );
  }


}
