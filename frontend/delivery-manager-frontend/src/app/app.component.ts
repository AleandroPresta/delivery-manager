import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CustomersListComponent } from "./customers-list/customers-list.component";
import { Customer } from './customers-list/Customer';
import { CustomersService } from './customers-list/customers.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CustomersListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
    title = 'delivery-manager-frontend';

    customersList: Customer[] = [
    ];

    constructor(private customerService: CustomersService) { }

    ngOnInit(): void {
        this.customerService.getCustomers().subscribe(
            (customers: Customer[]) => {
                this.customersList = customers;
            }
        );
    }

    editCustomer(customer: Customer) {
        console.log('Edit customer', customer);
    }

    deleteCustomer(customer: Customer) {
        console.log('Delete customer', customer);
    }
}
