import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path:'elements',loadChildren:() => 
  import('./elements/elements.module')
  .then(m=>m.ElementsModule)
},
{
  path:'collections',loadChildren:() => 
  import('./collections/collections.module')
  .then(m=>m.CollectionsModule)
},
{
  path:'views',loadChildren:() => 
  import('./views/views.module')
  .then(m=>m.ViewsModule)
},
{
  path:'mods',loadChildren:() => 
  import('./mods/mods.module')
  .then(m=>m.ModsModule)
},
  {path:'',component:HomeComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
