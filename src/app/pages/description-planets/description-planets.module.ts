import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescriptionPlanetsPageRoutingModule } from './description-planets-routing.module';

import { DescriptionPlanetsPage } from './description-planets.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescriptionPlanetsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DescriptionPlanetsPage]
})
export class DescriptionPlanetsPageModule {}
