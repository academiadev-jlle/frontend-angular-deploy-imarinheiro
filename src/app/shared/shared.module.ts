import {NgModule} from '@angular/core';
import {PetListItemComponent} from './pet-list-item/pet-list-item.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {PetDetailComponent} from './pet-detail/pet-detail.component';
import {RouterModule} from '@angular/router';

@NgModule ( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
    PetDetailComponent
  ],
  exports: [
    PetListItemComponent,
    FooterComponent,
    HeaderComponent,
    PetDetailComponent
  ]
} )
export class SharedModule {
}
