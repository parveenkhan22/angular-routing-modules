import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { HomeModuleComponent } from './home-module/home-module.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [HomeModuleComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
