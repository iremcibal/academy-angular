import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BootcampResponseModel } from '../models/bootcamp/bootcampResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {
  getAll = "https://localhost:7258/api/Bootcamps";

  constructor(private httpClient: HttpClient) { }

  getBootcamps():Observable<BootcampResponseModel>{
    return this.httpClient.get<BootcampResponseModel>(this.getAll);
  }
}
