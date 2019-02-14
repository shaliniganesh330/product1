import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestioncardComponent } from './questioncard/questioncard.component';
// MDB Angular Pro
import { ButtonsModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    QuestioncardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    WavesModule,
    CardsFreeModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     RouterModule.forRoot([
      {path:'register',component:QuestioncardComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
