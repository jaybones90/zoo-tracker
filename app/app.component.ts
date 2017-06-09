import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>All The Animals In The Zoo</h1>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <animal-list [childAnimalList]="masterAnimalList"></animal-list>
    </div>
    <div>
      <h3>Total Number Of Caretakers Required For Today</h3>
      <div *ngFor="let animal of masterAnimalList">
        <input [(ngModel)]="totalCaretakers += animal.caretakers">
      </div>
    </div>
  `
})

export class AppComponent {


  masterAnimalList: Animal[] = [
    new Animal('Grizzly Bear', 'Jimbo', 4, 'Carnivore', 'Bear Enclosure', 6, 'Male', 'Food', 'Humans'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate Roots And Leaves', 'Loud Noises'),
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises')
  ];

  totalCaretakers:number = 0;

  addAnimal(newAnimal) {
   this.masterAnimalList.push(newAnimal)
  }


}
