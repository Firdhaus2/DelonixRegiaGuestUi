import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuestRecordService } from '../guest-record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  guestRecord: any = [];
  personalInfoForm: FormGroup;

  constructor(private fb: FormBuilder, private guestRecordService: GuestRecordService, private router: Router) { }

  ngOnInit() {

    this.personalInfoForm = this.fb.group({
      streetadd: '',
      blockno: '',
      unitno: '',
      postalcode: '',
      country: '',
      firstname: '',
      lastname: '',
      gender: '',
      mobilenum: '',
      homenum: ''
    });
  }
  createGuestRecord() {
    this.guestRecordService.createGuestRecord(this.personalInfoForm.value.streetadd, this.personalInfoForm.value.blockno, this.personalInfoForm.value.unitno, this.personalInfoForm.value.postalcode, this.personalInfoForm.value.country, this.personalInfoForm.value.firstname, this.personalInfoForm.value.lastname, this.personalInfoForm.value.gender, this.personalInfoForm.value.mobilenum, this.personalInfoForm.value.homenum).subscribe(guestRecord => {
      this.guestRecord = guestRecord;
    });
    this.router.navigateByUrl('/payment')

  }

}
