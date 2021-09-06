import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyShelvesComponent } from './components/my-shelves/my-shelves.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent

  },
  {
    path: "shelves",
    component: MyShelvesComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
