import {Component} from '@angular/core';
import {PetOptions} from './pet/pet.options';

@Component ( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
} )
export class AppComponent {
  title = 'Pet:CODE';
  lostPets: PetOptions[] = [
    {
      status: 'Perdido',
      name: 'Nymeria',
      description: 'Arya Stark'
    },
    {
      status: 'Perdido',
      name: 'Lady',
      description: 'Sansa Stark'
    }
  ];
  adoptionPets = [
    {
      status: 'Encontrado',
      name: 'Ghost',
      description: 'Jhon Stark'
    },
    {
      status: 'Encontrado',
      name: 'Shaggy Dog',
      description: 'Rickon Stark'
    }
  ];
}
