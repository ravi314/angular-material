import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialSliderComponent } from './material-slider/material-slider.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { MaterialButtonComponent } from './material-button/material-button.component'
import { CardLayoutComponent } from './card-layout/card-layout.component';


const routes: Routes = [
  {
    path: 'Slider',
    component: MaterialSliderComponent
  },
  {
    path: '',
    component: CardLayoutComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
