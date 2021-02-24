import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { CarouselComponent } from './features/carousel/carousel.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {path:'',component: CarouselComponent},
  {
    path:'about',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
