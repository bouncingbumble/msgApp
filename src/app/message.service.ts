import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message/message.model';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SendMessage } from './message/SendMessage.model';


@Injectable()
export class MessageService {

  messageSent = new EventEmitter<Message>();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token 32bd12bdbc056504ce77de091a5335e7957ce689'
    })
  }
  config = {
    messageUrl:"https://iostest.bixly.com/messages/",
    sentMessagesUrl:"https://iostest.bixly.com/messages/sent/"
  }

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<Object>(this.config.messageUrl, this.httpOptions);
  }

  post(sendMessage: SendMessage){
    return this.http.post<SendMessage>(this.config.messageUrl, sendMessage, this.httpOptions)
    .subscribe();
  }

  getSent(){
    return this.http.get<Object>(this.config.sentMessagesUrl, this.httpOptions);
  }

  delete(id: string){
    return this.http.delete(this.config.messageUrl + id + '/', this.httpOptions);
  }

}
