import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../message.service';
import { SendMessage } from '../message/SendMessage.model';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
  @ViewChild('recipientInput') recipient: ElementRef;
  @ViewChild('titleInput') title: ElementRef;
  @ViewChild('messageInput') message: ElementRef;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSendMessage(){
    this.messageService.post(new SendMessage(this.title.nativeElement.value, this.message.nativeElement.value, this.recipient.nativeElement.value))
  }

}
