import { Component } from '@angular/core';

interface IProducts {
  name: string;
  role: string;
  salary: number;
  id: number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  selectedProducts: string = 'All';
  searchText: string = '';
  onFilterProductRadioChange(data: string) {
    this.selectedProducts = data;
    console.log('selectedProducts: ' + this.selectedProducts);
  }
  onSearchText(data: string) {
    this.searchText = data;
    console.log('searchText: ' + this.searchText);
  }
  products: IProducts[] = [
    {
      name: 'manoj Santra',
      role: 'spring boot developer',
      salary: 30000,
      id: 1,
    },
    {
      name: 'manoj Santra',
      role: 'django developer',
      salary: 30000,
      id: 2,
    },
    {
      name: 'manoj Santra',
      role: 'android developer',
      salary: 30000,
      id: 3,
    },
    {
      name: 'manoj Santra',
      role: 'MERN stack developer',
      salary: 30000,
      id: 4,
    },
    {
      name: 'manoj Santra',
      role: 'django developer',
      salary: 30000,
      id: 5,
    },
    {
      name: 'manoj Santra',
      role: 'MERN stack developer',
      salary: 30000,
      id: 6,
    },
  ];
}
