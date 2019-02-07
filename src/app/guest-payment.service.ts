import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestPaymentService {

  constructor(private http: HttpClient) { }

  createGuestPayment(username: string, ccHolder: string, ccNumber: string, expDate: string, cvcNumber: string) {
    return this.http.post<any[]>('/api/createGuestPayment/' + username + '/' + ccHolder + '/' + ccNumber + '/' + expDate + '/' + cvcNumber,
     { 'username': username,'ccHolder': ccHolder, 'ccNumber': ccNumber, 'expDate': expDate, 'cvcNumber': cvcNumber })
  }
}
