import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeHeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class CommonModule { }
