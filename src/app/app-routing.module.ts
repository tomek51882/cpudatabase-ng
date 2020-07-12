import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CpuListComponent } from './cpu-list/cpu-list.component';
import { CpuEditComponent } from './cpu-edit/cpu-edit.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddSocketComponent } from './add-socket/add-socket.component';
import { AddCpuComponent } from './add-cpu/add-cpu.component';


const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: CpuListComponent},
  {path: 'edit/:id', component: CpuEditComponent},
  {path: 'addBrand', component: AddBrandComponent},
  {path: 'addSocket', component: AddSocketComponent},
  {path: 'addCpu', component: AddCpuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
