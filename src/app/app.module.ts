import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { InputBoxComponent } from './commoncomponents/input-box/input-box.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InputBoxComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRoutes,
      {enableTracing:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
