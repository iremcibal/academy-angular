import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blacklist } from '../models/blacklist/blacklist';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {
  getAll = "https://localhost:7258/api/Blacklists";

  constructor(private httpClient : HttpClient) { }

  getBlacklists(): Observable<ListResponseModel<Blacklist>>{
    return this.httpClient.get<ListResponseModel<Blacklist>>(this.getAll);
  }
}
