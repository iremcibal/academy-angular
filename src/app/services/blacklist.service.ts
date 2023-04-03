import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListBlacklistResponse } from '../models/blacklist/listBlacklistResponse';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {
  getAll = "https://localhost:7258/api/Blacklists/";

  constructor(private httpClient : HttpClient) { }

  getBlacklists(): Observable<ListResponseModel<ListBlacklistResponse>>{
    let newPath= this.getAll + "GetAll";
    return this.httpClient.get<ListResponseModel<ListBlacklistResponse>>(newPath);
  }
}
