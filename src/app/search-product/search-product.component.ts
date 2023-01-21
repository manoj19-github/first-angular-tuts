import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css'],
})
export class SearchProductComponent {
  enteredSearchValue: string = '';
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange() {
    this.searchTextChange.emit(this.enteredSearchValue);
  }
}
