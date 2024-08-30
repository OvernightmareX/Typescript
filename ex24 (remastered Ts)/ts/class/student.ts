import { Field } from "../utils/interface.js";

export class Student {
    firstname: string; 
    lastname: string; 
    fields: Field[];

    constructor(firstname: string, lastname: string, fields: Field[]){
        this.firstname = firstname; 
        this.lastname = lastname; 
        this.fields = fields; 
    }
}
