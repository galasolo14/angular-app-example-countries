import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';

import {RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameComponent } from './game/game.component'

@NgModule({
  declarations: [
    AppComponent,
    
    
    ACompComponent,
    BCompComponent,
    NotFoundComponent,
    GameComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'games/:category', component: ACompComponent},
      {path: 'game/:id', component: GameComponent},
      {path: 'country/:name', component: BCompComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
