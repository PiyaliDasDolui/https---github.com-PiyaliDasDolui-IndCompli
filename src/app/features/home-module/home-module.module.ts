import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from '../common/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';


@NgModule({
  declarations: [
    HomeComponent
    ,CarouselComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HomeModuleRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ]
})
export class HomeModuleModule { }
