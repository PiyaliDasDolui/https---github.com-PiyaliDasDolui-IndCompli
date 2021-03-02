import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from '../common/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModuleRoutingModule } from './home-module-routing.module';

@NgModule({
  declarations: [
    HomeComponent
    ,CarouselComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
