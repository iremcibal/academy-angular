import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { BlacklistComponent } from './components/blacklist/blacklist.component';
import { BootcampComponent } from './components/bootcamp/bootcamp.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:BootcampComponent},
  {path:"bootcamp", component:BootcampComponent},
  {path:"dashboard", component:ApplicationComponent},
  {path:"blacklist", component:BlacklistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
