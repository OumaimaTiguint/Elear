import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { StepsComponent } from './steps/steps.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { AboutComponent } from './about/about.component';
import { GetstartedComponent } from './getstarted/getstarted.component';

@NgModule({
  declarations: [
    IntroComponent, 
    StepsComponent, 
    TestimonialComponent, 
    AboutComponent, 
    GetstartedComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
