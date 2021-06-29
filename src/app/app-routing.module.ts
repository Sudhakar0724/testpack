import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./login/login.module').then(a=>a.LoginModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then(a=>a.HomeModule)
  },
  {
    path:'register',
    loadChildren:()=>import('./register/register.module').then(a=>a.RegisterModule)
  },
  {
    path:'contactus',
    loadChildren:()=>import('./contactus/contactus.module').then(a=>a.ContactusModule)
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
