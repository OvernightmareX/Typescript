import { Person } from "./class/person.js";

const contactDiv = document.getElementById('allContact') as HTMLDivElement;

const formOutput = document.getElementById('displayForm') as HTMLFormElement; 
const formInput = document.getElementById('changeForm') as HTMLFormElement; 

const addButton = document.getElementById('addButton') as HTMLInputElement;
const editButton = document.getElementById('editButton') as HTMLInputElement;
const deleteButton = document.getElementById('deleteButton') as HTMLInputElement;
const changeButton = document.getElementById('changeButton') as HTMLInputElement;

let annuaire: Person[] = []; 

function displayAnnuaire(){
    contactDiv.innerHTML = "";

    annuaire.forEach((contact) => {
        let contactButton = document.createElement('button') as HTMLButtonElement; 
        contactButton.className = "btn text-white border-light btn-block mb-2"; 
        contactButton.textContent = contact.firstname + " " + contact.lastname; 
        contactButton.addEventListener("click", () => displayPerson(contact));
        contactDiv.appendChild(contactButton); 
    });
}

function displayPerson(person: Person){
    console.log(person); 

    const inputs = formOutput.querySelectorAll("input");

        inputs[0].setAttribute("value", person.firstname); 
        inputs[1].setAttribute("value", person.lastname); 
        inputs[2].setAttribute("value", person.birthDate); 
        inputs[3].setAttribute("value", person.email); 
        inputs[4].setAttribute("value", person.phone); 
}

formInput.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target as HTMLFormElement);

    const newPerson = new Person(
        formData.get("firstnameIn") as string, 
        formData.get("lastnameIn") as string, 
        formData.get("birthDateIn") as string, 
        formData.get("emailIn") as string, 
        formData.get("phoneIn") as string); 

    annuaire.push(newPerson); 
    
    displayAnnuaire(); 

    (e.target as HTMLFormElement).reset();
})

