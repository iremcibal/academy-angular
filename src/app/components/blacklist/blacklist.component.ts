import { Component } from '@angular/core';
import { ListBlacklistResponse } from 'src/app/models/blacklist/listBlacklistResponse';
import { BlacklistService } from 'src/app/services/blacklist.service';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent {

  blacklists:ListBlacklistResponse[] = [];
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
