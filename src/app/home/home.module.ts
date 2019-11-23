import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routing';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  providers: []
})
export class HomeModule { }
