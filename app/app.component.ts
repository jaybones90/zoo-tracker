import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>All The Animals In The Zoo</h1>
      // <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
      // <hr>
      // <edit-task [childSelectedTask]="selectedTask" (doneButtonClickedSender)="finishedEditing()">  </edit-task>
      // <new-task (newTaskSender)="addTask($event)"></new-task>
    </div>
  `
})

export class AppComponent {


  masterAnimalList: Animal[] = [
    new Animal('Grizzly Bear', 'Jimbo', 4, 'Carnivore', 'Bear Enclosure', 6, 'Male', 'Food', 'Humans'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate Roots And Leaves', 'Loud Noises'),
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises')
  ];
}
