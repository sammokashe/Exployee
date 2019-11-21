import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { FetchDetailsComponent } from './fetch-details/fetch-details.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path:"",component:HomeComponent,
        children:[
           {path:"",component:InsertDetailsComponent},
           {path:"insert",component:InsertDetailsComponent},
           {path:"fetch",component:FetchDetailsComponent}
       ]
      },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
