import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  declarations: [AboutusComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
