import { InstructorComponent } from './components/instructor/instructor.component';
import { BootcampDetailComponent } from './components/bootcamp-detail/bootcamp-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './components/application/application.component';
import { BlacklistComponent } from './components/blacklist/blacklist.component';
import { BootcampComponent } from './components/bootcamp/bootcamp.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:BootcampComponent},
  {path:"Bootcamps", component:BootcampComponent},
  {path:"dashboard", component:ApplicationComponent},
  {path:"blacklist", component:BlacklistComponent},
  {path:"Bootcamps/bootcampId/:id",component:BootcampDetailComponent},
  {path:"Instructors/instructorId/:instructorId",component:InstructorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
