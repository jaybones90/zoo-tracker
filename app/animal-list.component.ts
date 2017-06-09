import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
  <div>
    <label> Filter By Age </label>
    <select (change)='onChange($event.target.value)'>
      <option value='all'>All Animals</option>
      <option value='young'>Young Animals (less than 2 years of age)</option>
      <option value='mature'>Mature Animals (greater than 2 years of age)</option>
    </select>
  </div>
  <div *ngFor="let animal of childAnimalList | age:filterByAge">
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
  filterByAge: string = null;


  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
