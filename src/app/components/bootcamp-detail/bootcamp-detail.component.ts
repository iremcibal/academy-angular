import { ListInstructorResponse } from './../../models/instructor/listInstructorResponse';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListBootcampResponse } from 'src/app/models/bootcamp/listBootcampResponse';
import { BootcampService } from 'src/app/services/bootcamp.service';

@Component({
  selector: 'app-bootcamp-detail',
  templateUrl: './bootcamp-detail.component.html',
  styleUrls: ['./bootcamp-detail.component.css'],
})
export class BootcampDetailComponent {
  selectedBootcamp:any ;
  selectedInstructor: ListInstructorResponse;
  imgUrl: string = 'https://localhost:7258/Uploads/Images/';
  constructor(
    private bootcampService: BootcampService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getIdBootcamp(params['id']);
    });
  }

  getIdBootcamp(id: number) {
    this.bootcampService.getIdBootcamps(id).subscribe((response) => {
      this.selectedBootcamp = response.data;
    });
  }

  getSelectedInstructor(instructor:ListInstructorResponse){
    this.selectedInstructor = instructor;
  }

}
