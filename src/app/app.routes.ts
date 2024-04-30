import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuCreateComponent } from './components/menu-create/menu-create.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuEditComponent } from './components/menu-edit/menu-edit.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-menu' },
  { path: 'create-menu', component: MenuCreateComponent },
  { path: 'edit-menu/:id', component: MenuEditComponent },
  { path: 'menus-list', component: MenuListComponent }
];
