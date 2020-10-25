import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { CountryComponent } from './country/country.component';
import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';

import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    
    // CountryComponent,
    ACompComponent,
    BCompComponent,
    NotFoundComponent
  ],
  imports: [
    // ChartModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'a', component: ACompComponent},
      {path: 'b/:name', component: BCompComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
