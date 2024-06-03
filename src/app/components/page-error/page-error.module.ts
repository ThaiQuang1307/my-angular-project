import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageErrorRoutingModule } from './page-error-routing.module';
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';
import { Page404Component } from './page-404/page-404.component';


@NgModule({
  declarations: [
    CoomingSoonComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    PageErrorRoutingModule
  ]
})
export class PageErrorModule { }
