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
  <animal-details [childSelectedAnimal]="selectedAnimal"></animal-details>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
