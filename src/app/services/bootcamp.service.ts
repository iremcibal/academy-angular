import { ListBootcampResponse } from './../models/bootcamp/listBootcampResponse';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {
  getAll = "https://localhost:7258/api/Bootcamps/";

  constructor(private httpClient: HttpClient) { }

  getBootcamps():Observable<ListResponseModel<ListBootcampResponse>>{
    let newPath= this.getAll + "GetAll";
    return this.httpClient.get<ListResponseModel<ListBootcampResponse>>(newPath);
  }

  getIdBootcamps(id:number):Observable<ListResponseModel<ListBootcampResponse>>{
    let newPath = this.getAll + "bootcampId?id=" + id;
    return this.httpClient.get<ListResponseModel<ListBootcampResponse>>(newPath);
  }
}
