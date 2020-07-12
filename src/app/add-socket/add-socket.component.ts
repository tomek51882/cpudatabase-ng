import { Component, OnInit } from '@angular/core';
import { DatabaseService} from '../database.service';
import { BrandEntity } from '../brand-entity';
import { SocketEntity } from '../socket-entity';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-socket',
  templateUrl: './add-socket.component.html',
  styleUrls: ['./add-socket.component.css']
})
export class AddSocketComponent implements OnInit {
  brands:BrandEntity[];
  selectedBrand:BrandEntity;
  socket:SocketEntity;

  constructor(private database:DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.socket = new SocketEntity();
    this.getAllBrands();
  }

  getAllBrands():void
  {
    this.database.getAllBrands().subscribe(brands => this.brands = brands);
  }

  save()
  {
    this.socket.brand = this.selectedBrand;
    console.log(this.socket);
    //this.database.addNewBrand(this.brand).subscribe();
    this.database.addNewSocket(this.socket).subscribe();
    this.router.navigate(['/list']);
  }

}
