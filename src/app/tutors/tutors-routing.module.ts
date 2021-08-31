import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorsComponent } from './tutors/tutors.component';

const routes: Routes = [
    { path: '', component: TutorsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TutorsRoutingModule { }