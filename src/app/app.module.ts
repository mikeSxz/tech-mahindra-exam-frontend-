import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserCrudComponent } from './user-crud/user-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCrudComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
