import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

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

