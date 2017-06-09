import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-details',
  template: `
  <div *ngIf='childSelectedAnimal'>
    <h3>{{childSelectedAnimal.name}}</h3>
    <table style="width:100%" class='table'>
      <tr>
        <th>Name</th>
        <th>Species</th>
        <th>Age</th>
        <th>Diet</th>
        <th>Location</th>
        <th>Caretakers</th>
        <th>Sex</th>
        <th>Likes</th>
        <th>Dislikes</th>
      </tr>
      <tr>
        <td>{{childSelectedAnimal.name}}</td>
        <td>{{childSelectedAnimal.species}}</td>
        <td>{{childSelectedAnimal.age}}</td>
        <td>{{childSelectedAnimal.diet}}</td>
        <td>{{childSelectedAnimal.location}}</td>
        <td>{{childSelectedAnimal.caretakers}}</td>
        <td>{{childSelectedAnimal.sex}}</td>
        <td>{{childSelectedAnimal.likes}}</td>
        <td>{{childSelectedAnimal.dislikes}}</td>
      </tr>
    </table>
    <button (click)='editAnimal(childSelectedAnimal)'>Edit</button>
  <edit-animal [childAnimalToEdit]="animalToEdit"></edit-animal>
  </div>
  `
})


export class AnimalDetailsComponent {
  @Input() childSelectedAnimal: Animal;
  animalToEdit = null;

  editAnimal(childSelectedAnimal) {
    this.animalToEdit = childSelectedAnimal;
  }
}
