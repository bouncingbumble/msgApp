import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  config = {
    messageUrl:"https://iostest.bixly.com/messages/",
    url:"https://iostest.bixly.com/api-token-auth"
  }

  post(user: User){
      return this.http.post<User>(this.config.messageUrl, user, this.httpOptions)
      .subscribe();
    }
}
