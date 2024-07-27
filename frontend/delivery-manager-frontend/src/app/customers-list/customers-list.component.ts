import { Component, EventEmitter, Input, Output } from '@angular/core';
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

    @Input() customers: Customer[] = [];
    @Output() editCustomerEmitter = new EventEmitter<Customer>();
    @Output() deleteCustomerEmitter = new EventEmitter<Customer>();

    editCustomer(customer: Customer) {
        this.editCustomerEmitter.emit(customer);
    }

    deleteCustomer(customer: Customer) {
        this.deleteCustomerEmitter.emit(customer);
    }

}
