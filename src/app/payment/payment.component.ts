import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuestPaymentService } from '../guest-payment.service';
import { GuestRecordService } from '../guest-record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  guestPayment: any = [];
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder,private guestPaymentService: GuestPaymentService,private guestRecordService: GuestRecordService, private router: Router) { }


  ngOnInit() {
    this.paymentForm = this.fb.group({
      ccHolder: '',
      ccNumber: '',
      expDate: '',
      cvcNumber: ''
    });
  }

  createGuestPayment() {
    var username = this.guestRecordService.getSecureToken()
    this.guestPaymentService.createGuestPayment(username, this.paymentForm.value.ccHolder, this.paymentForm.value.ccNumber, this.paymentForm.value.expDate, this.paymentForm.value.cvcNumber).subscribe(guestPayment => {
      this.guestPayment = guestPayment;
    });

  }

}
