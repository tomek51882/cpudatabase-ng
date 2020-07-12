import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService} from '../database.service';
import { BrandEntity } from '../brand-entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  brand:BrandEntity;

  constructor(private database:DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.brand = new BrandEntity();
  }

  save(): void
  {
    this.database.addNewBrand(this.brand).subscribe();
    this.router.navigate(['/list']);
  }

}
