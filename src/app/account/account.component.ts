import { Component, OnInit } from '@angular/core';

import { GuestRecordService } from '../guest-record.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accInfos = [];

  constructor(private guestRecordService: GuestRecordService) { }

  ngOnInit() {
    this.retrieveAccInfo()
  }

  retrieveAccInfo() {
    var username = this.guestRecordService.getSecureToken()
    this.guestRecordService.retrieveAccInfo(username).subscribe(accInfos => {
      this.accInfos = accInfos;
    });
  }
}
