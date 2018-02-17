import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { LifeCycleListComponent } from './components/life-cycle-list/life-cycle-list.component';
import { InterseptorService } from './service/interseptor.service';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    LifeCycleListComponent,
    CustomPipeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterseptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
