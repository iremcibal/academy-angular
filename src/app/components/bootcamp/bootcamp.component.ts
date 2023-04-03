import { ListBootcampResponse } from 'src/app/models/bootcamp/listBootcampResponse';
import { Component, OnInit } from '@angular/core';
import { BootcampService } from 'src/app/services/bootcamp.service';


@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {

  bootcamps:ListBootcampResponse[]=[];
  selectedBootcamp : ListBootcampResponse;
  imgUrl:string="https://localhost:7258/Uploads/Images/";
  constructor(private bootcampService:BootcampService){ }

  ngOnInit(): void {
    this.getBootcamp();
  }

  getBootcamp(){
    this.bootcampService.getBootcamps().subscribe(response=>{
      this.bootcamps = response.data
    })
  }

  getSelectedBootcampDetail(bootcamp:ListBootcampResponse){
    this.selectedBootcamp = bootcamp;
  }

  
}
