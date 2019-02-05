import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestRecordService } from '../guest-record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  results: any = false;

  constructor(private fb: FormBuilder, private router: Router, private guestRecordService: GuestRecordService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      usernameL: ['', Validators.required],
      passwordL: ['', Validators.required]
    });
  }

  loginAcc() {
    this.guestRecordService.loginAcc(this.loginForm.value.usernameL, this.loginForm.value.passwordL)
      .subscribe(data => {
        this.results = data;
        if (this.results[0].auth) {
          this.guestRecordService.setSecureToken(this.loginForm.value.usernameL);
          this.router.navigateByUrl('/account');
        }
        else {
          alert("Invalid username or password!")
        }
      });
  }
}
