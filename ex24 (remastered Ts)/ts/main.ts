import { Student } from "./class/student.js";
import { Field, Place } from "./utils/interface.js";

function createStudent(firstname: string, lastname: string, fields: Field[]){
    etudiants.push(new Student("José", "Garcia", fields)); 
}

let etudiants: Student[] = [];

createStudent("José", "Garcia", [
    { fieldname: "francais", grade: 16 }, 
    { fieldname: "anglais", grade: 7 }, 
    { fieldname: "humour", grade: 14 } ]);

createStudent("Antoine", "De Caunes", [
    { fieldname: "francais", grade: 15 }, 
    { fieldname: "anglais", grade: 6 }, 
    { fieldname: "humour", grade: 16 }, 
    { fieldname: "informatique", grade: 4 }, 
    { fieldname: "sport", grade: 10 }
]);

createStudent("Marie", "Dubois", [
    { fieldname: "francais", grade: 18 }, 
    { fieldname: "anglais", grade: 13 }, 
    { fieldname: "maths", grade: 17 }, 
    { fieldname: "sport", grade: 12 }
]);

createStudent("Luc", "Martin", [
    { fieldname: "francais", grade: 10 }, 
    { fieldname: "anglais", grade: 9 }, 
    { fieldname: "informatique", grade: 15 }, 
    { fieldname: "sport", grade: 14 }
]);

createStudent("Sophie", "Lemoine", [
    { fieldname: "francais", grade: 14 }, 
    { fieldname: "anglais", grade: 14 }, 
    { fieldname: "humour", grade: 12 }, 
    { fieldname: "arts", grade: 19 }
]);

createStudent("Paul", "Durand", [
    { fieldname: "francais", grade: 12 }, 
    { fieldname: "anglais", grade: 8 }, 
    { fieldname: "maths", grade: 16 }, 
    { fieldname: "histoire", grade: 15 }, 
    { fieldname: "musique", grade: 14 }
]);
    
let nbNote: number; 
let moyenne: number; 
let classement: Place[] = [];

etudiants.forEach(etudiant => {
    console.log("###########DEBUT etudiant###########");
    console.log(`Etudiant : ${etudiant.firstname} ${etudiant.lastname}`);

    nbNote = 0; 
    moyenne = 0;
    for(let matiere in etudiant.fields){
        console.log(`  ${etudiant.fields[matiere].fieldname} : ${etudiant.fields[matiere].grade} / 20`);
        nbNote++; 
        moyenne += etudiant.fields[matiere].grade;
    }
    moyenne = moyenne / nbNote; 
    console.log(`La moyenne est de ${moyenne.toFixed(2)}`);
    console.log("############FIN etudiant############");

    
    let place = {name: etudiant.firstname + " " + etudiant.lastname, moyenne: moyenne}; 
    classement.push(place);

});
classement.sort((a, b) => b.moyenne - a.moyenne);
console.table(classement);
