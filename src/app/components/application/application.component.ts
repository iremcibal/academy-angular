import { ListApplicationResponse } from './../../models/application/listApplicationResponse';
import { Component } from '@angular/core';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  applications : ListApplicationResponse[]= [];
  constructor(private applicationService: ApplicationService) {}

  ngOnInit(): void{
    this.getApplications();
  }

  getApplications(){
    this.applicationService.getApplications().subscribe(response=>{
      this.applications = response.data
    })

  }
}
