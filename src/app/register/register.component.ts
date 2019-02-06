import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestRecordService } from '../guest-record.service';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../custom.validator';

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
      pwdSet: this.fb.group({
        passwordR: ['', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
        rePasswordR: ['', Validators.required]}, { validator: passwordMatchValidator }),
      emailR: ['', [Validators.required, Validators.email]]
    });
  }

  registerAcc() {
    this.guestRecordService.registerAcc(
      this.registerForm.value.usenameR, this.registerForm.value.pwdSet.passwordR, this.registerForm.value.emailR
    ).subscribe();
    alert("Account Created");
    this.router.navigateByUrl('/login');
  }
}
