import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { EditHotelsComponent } from './edit-hotels/edit-hotels.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'add-Hotels', component:AddHotelsComponent},
  {path: 'edit-Hotels/:id', component:EditHotelsComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
