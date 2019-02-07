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
      streetAdd: '',
      blockNo: '',
      unitNo: '',
      postalCode: '',
      country: '',
      firstName: '',
      lastName: '',
      gender: '',
      mobileNum: '',
      homeNum: ''
    });
  }
  createGuestRecord() {
    this.guestRecordService.createGuestRecord(this.personalInfoForm.value.streetAdd, this.personalInfoForm.value.blockNo, this.personalInfoForm.value.unitNo, this.personalInfoForm.value.postalCode, this.personalInfoForm.value.country, this.personalInfoForm.value.firstName, this.personalInfoForm.value.lastName, this.personalInfoForm.value.gender, this.personalInfoForm.value.mobileNum, this.personalInfoForm.value.homeNum).subscribe(guestRecord => {
      this.guestRecord = guestRecord;
    });
    this.router.navigateByUrl('/payment')

  }

}
