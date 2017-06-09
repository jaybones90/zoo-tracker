import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <div *ngFor="let animal of childAnimalList">
    <ul>
      <li (click)='selectedAnimal = animal'>
      {{animal.name}}
      </li>
    </ul>
  </div>
  <div *ngIf="selectedAnimal">
    <h3>{{selectedAnimal.name}}</h3>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
