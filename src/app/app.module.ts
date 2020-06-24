import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';
import { EditComponent } from './edit/edit.component';

import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FormComponent,
    ListComponent,
    CardComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
