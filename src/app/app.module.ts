import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';

import { postReducer } from './reducers/post.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ post: postReducer, message: simpleReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
