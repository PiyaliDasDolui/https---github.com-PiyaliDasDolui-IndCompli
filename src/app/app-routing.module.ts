import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//   {path:'',component: HomeComponent},
//   {
//     path:'about',
//     component: AboutusComponent
//   }
// ];

const routes: Routes = [
  {
    path:'',
    data:{
      breadcrumb: null
    },
    children:[
      {path: '',
      data:{
        breadcrumb: null
      },
      redirectTo: '/home', pathMatch: 'full'},
      {
        path: 'home',
        data:{
          breadcrumb: null
        },
        loadChildren: 'src/app/features/home-module/home-module.module#HomeModuleModule'
      },
      {
        path: 'about',
        data:{
          breadcrumb: 'about'
        },
        loadChildren: 'src/app/features/about/about.module#AboutModule'
      }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
