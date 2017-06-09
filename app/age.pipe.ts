import { Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(animals: Animal[], filter) {
    let output: Animal[] = [];
    if (filter === 'young') {
      for(let i = 0; i < animals.length; i++) {
        if(animals[i].age < 2) {
          output.push(animals[i])
        }
      }
      return output;
    } else if (filter === 'mature') {
      for(let i = 0; i < animals.length; i++) {
        if(animals[i].age > 2) {
          output.push(animals[i])
        }
      }
      return output;
    } else {
      return animals;
    }
  }
}
