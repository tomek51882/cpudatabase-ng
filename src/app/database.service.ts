import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CpuEntity } from './cpu-entity';
import { SocketEntity } from './socket-entity';
import { BrandEntity } from './brand-entity';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl: string;

  constructor(private http: HttpClient) { 
    this.apiUrl = 'http://localhost:8080';
  }

  public getAllCpus(): Observable<CpuEntity[]>
  {
    const url = `${this.apiUrl}/getAllCpus`;
    return this.http.get<CpuEntity[]>(url);
  }

  public getCpu(id:number): Observable<CpuEntity>
  {
    const url = `${this.apiUrl}/getCpu/${id}`;
    return this.http.get<CpuEntity>(url);
  }

  public getAllBrands(): Observable<BrandEntity[]>
  {
    const url = `${this.apiUrl}/getAllBrands`;
    return this.http.get<BrandEntity[]>(url);
  }

  public getAllSockets(): Observable<SocketEntity[]>
  {
    const url = `${this.apiUrl}/getAllSockets`;
    return this.http.get<SocketEntity[]>(url);
  }
  public addNewBrand(brand: BrandEntity)
  {
    const url = `${this.apiUrl}/addBrand`;
    const httpOptions = 
    {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }
    console.log(JSON.stringify(brand));
    return this.http.post<BrandEntity>(url, JSON.stringify(brand),httpOptions);
  }
  public addNewSocket(socket: SocketEntity)
  {
    const url = `${this.apiUrl}/addSocket`;
    const httpOptions = 
    {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }
    console.log(JSON.stringify(socket));
    return this.http.post<SocketEntity>(url, JSON.stringify(socket),httpOptions);
  }
  public addNewCpu(cpu: CpuEntity)
  {
    const url = `${this.apiUrl}/addCpu`;
    const httpOptions = 
    {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }
    console.log(JSON.stringify(cpu));
    return this.http.post<SocketEntity>(url, JSON.stringify(cpu),httpOptions);
  }
  public updateCpu(cpu: CpuEntity)
  {
    const url = `${this.apiUrl}/updateCpu/${cpu.id}`;
    const httpOptions = 
    {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }
    return this.http.put(url,JSON.stringify(cpu),httpOptions);
  }
  public deleteCpu(cpu: CpuEntity)
  {
    const url = `${this.apiUrl}/deleteCpu/${cpu.id}`;
    const httpOptions = 
    {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }
    return this.http.delete(url);
  }

}
