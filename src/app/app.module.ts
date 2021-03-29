import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './features/common/home-header/home-header.component';
import {FooterComponent} from './features/common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from './features/common/breadcrumb/breadcrumb.component';
import { SinglePageComponent } from './features/single-page/single-page.component';
import { HomeComponent } from './features/home-module/home/home.component';
import { CarouselComponent }  from './features/common/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SinglePageComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
