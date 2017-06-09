import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button (click)="showNewAnimalForm()">Enter A New Animal</button>
  <div *ngIf="animalForm" class='form-group'>
    <label>Species:</label>
    <input #species class='form-control'>
    <label>Name:</label>
    <input #name class='form-control'>
    <label>Age:</label>
    <input #age class='form-control'>
    <label>Diet:</label>
    <input #diet class='form-control'>
    <label>Location:</label>
    <input #location class='form-control'>
    <label>Number Of Required Caretakers:</label>
    <input #caretakers class='form-control'>
    <label>Sex:</label>
    <input #sex class='form-control'>
    <label>Likes:</label>
    <input #likes class='form-control'>
    <label>Dislikes:</label>
    <input #dislikes class='form-control'>
    <button (click)="createNewAnimal(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value)">Submit</button>
  </div>

  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();
  animalForm = null;

  showNewAnimalForm() {
    this.animalForm = 1;
  }

  createNewAnimal(species:string, name:string, age:number, diet:string, location:string, caretakers:number, sex:string, likes:string, dislikes:string ) {
    const newAnimal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes)
    this.newAnimalSender.emit(newAnimal);
    this.animalForm = null;
  }




}
