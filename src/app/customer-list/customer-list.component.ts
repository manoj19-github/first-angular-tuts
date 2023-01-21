import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  selectedCustomer: Customer = {} as Customer;
  customers: Customer[] = [
    {
      name: 'manoj santra',
      id: 1,
      address: 'kolkata',
      country: 'india',
      city: 'kolkata',
    },
    {
      name: 'anthony',
      id: 2,
      address: 'sanfrancisco',
      country: 'USA',
      city: 'sansfrancisco',
    },
    {
      name: 'pritam',
      id: 3,
      address: 'mumbai',
      country: 'india',
      city: 'mumbai',
    },
  ];
}
