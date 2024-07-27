import { Component } from '@angular/core';
import { Customer } from './Customer';
import { NgFor } from '@angular/common';

@Component({
  selector: 'customers-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './customers-list.component.html',
  styleUrl: './customers-list.component.css'
})
export class CustomersListComponent {

  customers: Customer[] = [
    new Customer('John', 'Doe', 30, 'john.doe@gmail.com', '123 Main St'),
    new Customer('Jane', 'Smith', 25, 'jane.smith@gmail.com', '456 Elm St'),
    new Customer('Michael', 'Johnson', 40, 'michael.johnson@gmail.com', '789 Oak St'),
    new Customer('Emily', 'Davis', 35, 'emily.davis@gmail.com', '321 Pine St'),
    new Customer('David', 'Wilson', 28, 'david.wilson@gmail.com', '654 Birch St')
  ];

}
