import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestRecordService } from '../guest-record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private guestRecordService: GuestRecordService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      usenameR: ['', Validators.required],
      passwordR: ['', Validators.required],
      rePasswordR: ['', Validators.required],
      emailR: ['', Validators.required]
    });
  }

  registerAcc() {
    this.guestRecordService.registerAcc(
      this.registerForm.value.usenameR, this.registerForm.value.passwordR, this.registerForm.value.emailR
    ).subscribe();
    alert("Account Created");
    this.router.navigateByUrl('/login');
  }
}
