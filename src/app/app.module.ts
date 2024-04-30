import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes.js';
import { AppComponent } from './app.component';
import { MenuCreateComponent } from './components/menu-create/menu-create.component';
import { MenuEditComponent } from './components/menu-edit/menu-edit.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuCreateComponent,
    MenuEditComponent,
    MenuListComponent,
  ],
  imports: [
    BrowserModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }
