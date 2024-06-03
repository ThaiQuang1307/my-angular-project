import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoomingSoonComponent } from './cooming-soon/cooming-soon.component';
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  { path: 'cooming-soon', component: CoomingSoonComponent },
  { path: '404', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageErrorRoutingModule { }
