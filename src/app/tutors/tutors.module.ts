import { TutorsRoutingModule } from './tutors-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorsComponent } from './tutors/tutors.component';

@NgModule({
  declarations: [TutorsComponent],
  imports: [
    CommonModule,
    TutorsRoutingModule
  ]
})
export class TutorsModule { }
