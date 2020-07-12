import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CpuListComponent } from './cpu-list/cpu-list.component';
import { CpuEditComponent } from './cpu-edit/cpu-edit.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddSocketComponent } from './add-socket/add-socket.component';
import { AddCpuComponent } from './add-cpu/add-cpu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CpuListComponent,
    CpuEditComponent,
    AddBrandComponent,
    AddSocketComponent,
    AddCpuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
