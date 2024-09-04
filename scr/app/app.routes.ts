import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import path from 'node:path';

export const routes: Routes = [
{path:'', redirectTo:'/login', pathMatch:'full'  }  ,
{path:'login', component:LoginComponent}
];
