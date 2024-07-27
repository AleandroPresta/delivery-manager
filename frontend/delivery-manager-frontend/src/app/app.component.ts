import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { Customer } from './customers-list/Customer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CustomersListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent {
    title = 'delivery-manager-frontend';

    customersList: Customer[] = [
        new Customer('John', 'Doe', 30, 'john.doe@gmail.com', '123 Main St'),
        new Customer('Jane', 'Smith', 25, 'jane.smith@gmail.com', '456 Elm St'),
        new Customer('Michael', 'Johnson', 40, 'michael.johnson@gmail.com', '789 Oak St'),
        new Customer('Emily', 'Davis', 35, 'emily.davis@gmail.com', '321 Pine St'),
        new Customer('David', 'Wilson', 28, 'david.wilson@gmail.com', '654 Birch St')
    ];

    editCustomer(customer: Customer) {
        console.log('Edit customer', customer);
    }

    deleteCustomer(customer: Customer) {
        console.log('Delete customer', customer);
    }
}
