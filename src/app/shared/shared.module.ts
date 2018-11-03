import {NgModule} from '@angular/core';
import {PetListItemComponent} from './pet-list-item/pet-list-item.component';
import {PetListItemOptions} from '../pet-list-item.options';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule ( {
  declarations: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
  ],
  exports: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
  ]
} )
export class SharedModule {
}
