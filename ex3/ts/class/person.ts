export class Person {
    firstname: string; 
    lastname: string; 
    birthDate: string; 
    email: string; 
    phone: string;
    
    constructor(firstname: string, lastname: string, birthDate: string, email: string, phone: string){
        this.firstname = firstname; 
        this.lastname = lastname; 
        this.birthDate = birthDate; 
        this.email = email; 
        this.phone = phone; 
    }
}