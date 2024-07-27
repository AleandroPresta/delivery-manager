export interface CustomerInterface {
    name: string;
    surname: string;
    age: number;
    email: string;
    address: string;
}

export class Customer implements CustomerInterface {
    name: string;
    surname: string;
    age: number;
    email: string;
    address: string;

    constructor(name: string, surname: string, age: number, email: string, address: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.address = address;
    }
}