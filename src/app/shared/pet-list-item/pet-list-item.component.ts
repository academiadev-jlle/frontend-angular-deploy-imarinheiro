import {Component, Input} from '@angular/core';

@Component ( {
  selector: 'app-pet-list-item',
  templateUrl: 'pet-list-item.component.html'
} )
export class PetListItemComponent {
  @Input () status: string;
  @Input () name: string;
  @Input () description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo metus ut scelerisque congue.';
  photo = 'https://i.pinimg.com/736x/d2/1c/20/d21c201f3c6a666f9151dd43cb634930.jpg';
}
