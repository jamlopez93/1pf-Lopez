import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmComponent } from './abm/abm.component';
import { loginComponent } from './login/login.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [
  { path: 'list', loadChildren: ()=>import('./list/list.module').then((m)=>m.ListModule), canActivate: [AuthGuard] },
  { path: 'abm', component: AbmComponent, canActivate: [AuthGuard] },
  { path: 'login', component: loginComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
