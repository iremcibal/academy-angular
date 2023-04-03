import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListApplicationResponse } from '../models/application/listApplicationResponse';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  getAll = "https://localhost:7258/api/Applications/";

  constructor(private httpClient : HttpClient) { }

  getApplications(): Observable<ListResponseModel<ListApplicationResponse>>{
    let newPath= this.getAll + "GetAll";
    return this.httpClient.get<ListResponseModel<ListApplicationResponse>>(newPath);
  }
}
