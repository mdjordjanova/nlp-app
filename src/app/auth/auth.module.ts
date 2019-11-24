import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  providers: []
})
export class AuthModule {

}
