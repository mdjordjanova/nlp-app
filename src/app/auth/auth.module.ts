import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  providers: []
})
export class AuthModule {

}
