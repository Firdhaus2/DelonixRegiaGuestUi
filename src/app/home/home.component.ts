import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookingForm1: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.bookingForm1 = this.fb.group({
      date1: '',
      date2: '',
      roomNo: '',
      adultNo: '',
      childNo: ''
    });
  }

}
