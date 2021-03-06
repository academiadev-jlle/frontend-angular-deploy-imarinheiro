import { Component, OnInit } from '@angular/core';
import {PetListItemOptions} from 'src/app/shared/pet-list-item/pet-list-item.options';
import { PetsService } from 'src/app/shared/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lostPets: PetListItemOptions[] = [];
  adoptionPets: PetListItemOptions[] = [];

  constructor(private petService: PetsService) {
    this.lostPets = petService.getLost();
    this.adoptionPets = petService.getAdoption();
  }

  ngOnInit() {
  }

}
