import { Component, OnInit } from '@angular/core';
import { DatabaseService} from '../database.service';
import { BrandEntity } from '../brand-entity';
import { SocketEntity } from '../socket-entity';
import { CpuEntity } from '../cpu-entity';
import { Router } from '@angular/router';
import { CpuListComponent } from '../cpu-list/cpu-list.component';

@Component({
  selector: 'app-add-cpu',
  templateUrl: './add-cpu.component.html',
  styleUrls: ['./add-cpu.component.css']
})
export class AddCpuComponent implements OnInit {
  brands:BrandEntity[];
  sockets:SocketEntity[];
  filteredSockets:SocketEntity[] = [];

  selectedBrand:BrandEntity;
  selectedSocket:SocketEntity;

  cpu:CpuEntity;

  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBrands();
    this.getAllSockets();
    this.cpu = new CpuEntity();
  }

  getAllBrands(): void
  {
    this.database.getAllBrands().subscribe(brands => this.brands = brands);
  }
  getAllSockets(): void
  {
    this.database.getAllSockets().subscribe(sockets => this.sockets=sockets);
  }
  changedBrand():void
  {
    this.filteredSockets=[];
    this.sockets.forEach(element => {
      if(element.brand.brandName == this.selectedBrand.brandName)
      {
        this.filteredSockets.push(element);
      }
    });
  }

  save(): void
  {
    this.cpu.cpuBrand = this.selectedBrand;
    this.cpu.cpuSocket = this.selectedSocket;

    this.database.addNewCpu(this.cpu).subscribe();
    //this.router.navigate(['/']);

    //cpu => CpuListComponent.cpus.push(cpu) 
  }

}
