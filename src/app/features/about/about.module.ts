import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
import { AboutRoutingModule } from './about-routing.module';
import { FirtsChildComponent } from './firts-child/firts-child.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { AboutBreadcrumbComponent } from './about-breadcrumb/about-breadcrumb.component';

@NgModule({
  declarations: [AboutusComponent, FirtsChildComponent, Child1Component, Child2Component, Child3Component, AboutBreadcrumbComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
