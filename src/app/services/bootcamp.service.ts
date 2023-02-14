import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Bootcamp } from '../models/bootcamp/bootcamp';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {
  getAll = "https://localhost:7258/api/Bootcamps";

  constructor(private httpClient: HttpClient) { }

  getBootcamps():Observable<ListResponseModel<Bootcamp>>{
    return this.httpClient.get<ListResponseModel<Bootcamp>>(this.getAll);
  }
}
