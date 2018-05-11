import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('passwordInput') password: ElementRef;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSendMessage(){
    this.authenticationService.post(new User(this.name.nativeElement.value, this.password.nativeElement.value))
  }

}
