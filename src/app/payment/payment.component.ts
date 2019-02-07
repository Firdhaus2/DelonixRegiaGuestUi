import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.paymentForm = this.fb.group({
      ccHolder: '',
      ccNumber: '',
      expDate: '',
      cvcNumber: ''
    });
  }

}
