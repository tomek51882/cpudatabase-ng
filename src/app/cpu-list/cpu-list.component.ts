import { Component, OnInit } from '@angular/core';
import { CpuEntity} from '../cpu-entity';
import { DatabaseService } from '../database.service'

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.css']
})
export class CpuListComponent implements OnInit {
  
  cpus: CpuEntity[];
  selectedCpu: CpuEntity;
  infoModal: boolean = false;

  constructor(private database:DatabaseService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void
  {
    this.database.getAllCpus().subscribe(data => {this.cpus = data});
  }
  selectCpu(cpu: CpuEntity, infoModal: boolean): void
  {
    this.infoModal = infoModal;
    this.selectedCpu = cpu;
  }
  deleteCpu(): void
  {
    this.database.deleteCpu(this.selectedCpu).subscribe();
    window.location.reload();
  }

}
