import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [HomeHeaderComponent, FooterComponent, BreadcrumbComponent,CarouselComponent, NavigationComponent],
  imports: [
    CommonModule
  ]
})
export class CommonModule { }
