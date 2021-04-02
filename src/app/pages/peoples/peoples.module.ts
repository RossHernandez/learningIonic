import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplesPageRoutingModule } from './peoples-routing.module';

import { PeoplesPage } from './peoples.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PeoplesPage]
})
export class PeoplesPageModule {}
