import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childAnimalToEdit" class='form-group'>
    <label>Species:</label>
    <input [(ngModel)]='childAnimalToEdit.species' class='form-control'>
    <label>Name:</label>
    <input [(ngModel)]='childAnimalToEdit.name' class='form-control'>
    <label>Age:</label>
    <input [(ngModel)]='childAnimalToEdit.age' class='form-control'>
    <label>Diet:</label>
    <input [(ngModel)]='childAnimalToEdit.diet' class='form-control'>
    <label>Location:</label>
    <input [(ngModel)]='childAnimalToEdit.location' class='form-control'>
    <label>Number Of Required Caretakers:</label>
    <input [(ngModel)]='childAnimalToEdit.caretakers' class='form-control'>
    <label>Sex:</label>
    <input [(ngModel)]='childAnimalToEdit.sex' class='form-control'>
    <label>Likes:</label>
    <input [(ngModel)]='childAnimalToEdit.likes' class='form-control'>
    <label>Dislikes:</label>
    <input [(ngModel)]='childAnimalToEdit.dislikes' class='form-control'>
    <button (click)="hideEditForm()">Submit</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childAnimalToEdit: Animal;


  hideEditForm() {
    this.childAnimalToEdit = null;
  }


}
