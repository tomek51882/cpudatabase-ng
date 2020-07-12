import { Component, OnInit } from '@angular/core';
import { DatabaseService} from '../database.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CpuEntity } from '../cpu-entity';
import { BrandEntity } from '../brand-entity';
import { SocketEntity } from '../socket-entity';


@Component({
  selector: 'app-cpu-edit',
  templateUrl: './cpu-edit.component.html',
  styleUrls: ['./cpu-edit.component.css']
})
export class CpuEditComponent implements OnInit {
  cpu: CpuEntity;
  brands: BrandEntity[];
  sockets: SocketEntity[];
  
  filteredSockets:SocketEntity[] = [];

  selectedBrand:BrandEntity;
  selectedSocket:SocketEntity;

  constructor(private route: ActivatedRoute, private database:DatabaseService, private location: Location) { }

  ngOnInit(): void {
    this.getCpu();
    this.getAllBrands();
    this.getAllSockets();
    this.selectedBrand=null;
    this.selectedSocket=null;
    //this.changedBrand();
  }

  getCpu(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.database.getCpu(id).subscribe(cpu =>  this.cpu = cpu);
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
    console.log(this.cpu)
    this.database.updateCpu(this.cpu).subscribe();
  }

}
