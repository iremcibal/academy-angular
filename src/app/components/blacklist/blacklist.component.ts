import { Component } from '@angular/core';
import { Blacklist } from 'src/app/models/blacklist/blacklist';
import { BlacklistService } from 'src/app/services/blacklist.service';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent {

  blacklists:Blacklist[] = [];
  constructor(private blacklistService:BlacklistService){}

  ngOnInit(): void{
    this.getBlacklist();
  }

  getBlacklist(){
    this.blacklistService.getBlacklists().subscribe(response=>{
      this.blacklists = response.data
    })
  }
}
