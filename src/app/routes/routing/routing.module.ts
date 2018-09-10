import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../../views/homepage/homepage.component';
import { AppComponent } from '../../app.component';
import { ZPageNotFoundComponent } from '../../views/z-page-not-found/z-page-not-found.component';
import { AppContentComponent } from '../../app-content/app-content.component';

const routes: Routes = [
  { path: '', component: AppContentComponent, 
    children:[
      { path: 'home', component: HomepageComponent},
      { path: 'homepage', redirectTo: 'home'},
      { path: '', redirectTo:'home', pathMatch: 'full'}
    ]
  },
  { path: '**', component: ZPageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class RoutingModule { }
