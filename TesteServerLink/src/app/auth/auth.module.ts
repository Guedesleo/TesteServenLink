import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from '../auth/sigin/sigin.component';
import { SigupComponent } from '../auth/sigup/sigup.component';
import { HomeComponent } from '../home/home.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SiginComponent },
  { path: 'register-user', component: SigupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ResetPasswordComponent },
];

@NgModule({
  declarations: [SiginComponent, SigupComponent, ResetPasswordComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class AuthModule {}
