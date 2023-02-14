import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../models/application/application';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  getAll = "https://localhost:7258/api/Applications";

  constructor(private httpClient : HttpClient) { }

  getApplications(): Observable<ListResponseModel<Application>>{
    return this.httpClient.get<ListResponseModel<Application>>(this.getAll);
  }
}
