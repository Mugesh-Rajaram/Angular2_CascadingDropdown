import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { InterseptorService } from './service/interseptor.service';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { HomeComponent } from './spa/components/home/home.component';
import { AboutComponent } from './spa/components/about/about.component';
import { AppRoutes } from './app.routing';
import { BasicMenuComponent } from './layout/basic-menu/basic-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    CustomPipeComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    AboutComponent,
    BasicMenuComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterseptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
