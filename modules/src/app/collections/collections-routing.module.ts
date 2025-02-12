import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';
import { BiographyComponent } from './biography/biography.component';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:CollectionHomeComponent,
  children:[
    {path:'',component:BiographyComponent},
    {
      path:'companies',component:CompaniesComponent
    },
    {path:'partners',component:PartnersComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
