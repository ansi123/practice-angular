import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent} from './normal/normal.component';


const routes: Routes = [
  {
    path: "admin", loadChildren: () => import('./admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: "user", loadChildren: () => import('./user/user.module')
      .then(mod => mod.UserModule)
  },
  {
    path:"normal", component: NormalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
