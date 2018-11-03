import { Component, OnInit } from '@angular/core';
import {PetListItemOptions} from '../../pet-list-item.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lostPets: PetListItemOptions[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
