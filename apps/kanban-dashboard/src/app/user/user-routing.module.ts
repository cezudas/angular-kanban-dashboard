import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthStateResolver } from './auth-state.resolver';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    resolve: {
      authState: AuthStateResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
