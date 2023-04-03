import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetInstructorResponse } from '../models/instructor/getInstructorResponse';
import { ListInstructorResponse } from '../models/instructor/listInstructorResponse';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  apiUrl = 'https://localhost:7258/api/Instructors';


  constructor(private httpClient: HttpClient) { }

  getInstructors():Observable<ListResponseModel<ListInstructorResponse>>{
    let newPath = this.apiUrl + "/GetAll";
    return this.httpClient.get<ListResponseModel<ListInstructorResponse>>(newPath);
  }

  getInstructorById(instructorId:number):Observable<GetInstructorResponse>{
    let newPath = this.apiUrl + "/instructorId?=" + instructorId;
    return this.httpClient.get<GetInstructorResponse>(newPath);
  }
}
