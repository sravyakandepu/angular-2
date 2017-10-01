import {NgModule} from '@angular/cli';
import {RouterModule, Routes} from '@angular/router';
import {NewHomeComponent} from '../../src/app/new-home/new-home.component';
import {NewAboutComponent} from '../../src/app/new-about/new-about.component';


export const routes:Routes = [
    {path :'new-home' , component :NewHomeComponent},
    {path :'new-about',component:NewAboutComponent}
];

export const routing:  = RouterModule.forRoot(routes);