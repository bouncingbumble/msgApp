import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { DeleteComponent } from './delete/delete.component';
import { ComposeComponent } from './compose/compose.component';
import { ErrorComponent } from './error/error.component';
import { NavComponent } from './nav/nav.component';
import { MessageService } from './message.service';
import { AuthenticationService } from './authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InboxComponent,
    SentComponent,
    DeleteComponent,
    ComposeComponent,
    ErrorComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MessageService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
