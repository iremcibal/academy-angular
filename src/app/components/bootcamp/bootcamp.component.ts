import { Component, OnInit } from '@angular/core';
import { Bootcamp } from 'src/app/models/bootcamp/bootcamp';
import { BootcampService } from 'src/app/services/bootcamp.service';


@Component({
  selector: 'app-bootcamp',
  templateUrl: './bootcamp.component.html',
  styleUrls: ['./bootcamp.component.css']
})
export class BootcampComponent implements OnInit {

  bootcamps:Bootcamp[] = [];
  constructor(private bootcampService:BootcampService){ }

  ngOnInit(): void {
    this.getBootcamp();
  }

  getBootcamp(){
    this.bootcampService.getBootcamps().subscribe(response=>{
      this.bootcamps = response.data
    })

  }
}
