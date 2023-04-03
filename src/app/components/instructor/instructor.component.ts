import { GetInstructorResponse } from './../../models/instructor/getInstructorResponse';
import { InstructorService } from './../../services/instructor.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent {
  instructor:GetInstructorResponse;
  constructor(private instructorService:InstructorService,private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getByIdInstructor(params['instructorId']);
    });
  }

  getByIdInstructor(instructorId:number){
    this.instructorService.getInstructorById(instructorId).subscribe(response=>{
      this.instructor = response
    })
  }
}
