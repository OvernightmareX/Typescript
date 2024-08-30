import { Person } from "./class/person.js";
const contactDiv = document.getElementById('allContact');
const formOutput = document.getElementById('displayForm');
const formInput = document.getElementById('changeForm');
const addButton = document.getElementById('addButton');
const editButton = document.getElementById('editButton');
const deleteButton = document.getElementById('deleteButton');
const changeButton = document.getElementById('changeButton');
let annuaire = [];
function displayAnnuaire() {
    contactDiv.innerHTML = "";
    annuaire.forEach((contact) => {
        let contactButton = document.createElement('button');
        contactButton.className = "btn text-white border-light btn-block mb-2";
        contactButton.textContent = contact.firstname + " " + contact.lastname;
        contactButton.addEventListener("click", () => displayPerson(contact));
        contactDiv.appendChild(contactButton);
    });
}
function displayPerson(person) {
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
    const formData = new FormData(e.target);
    const newPerson = new Person(formData.get("firstnameIn"), formData.get("lastnameIn"), formData.get("birthDateIn"), formData.get("emailIn"), formData.get("phoneIn"));
    annuaire.push(newPerson);
    displayAnnuaire();
    e.target.reset();
});
