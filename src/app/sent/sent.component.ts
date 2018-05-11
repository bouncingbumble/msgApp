import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message/message.model';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  @Input()messages: Message[];

  ngOnInit() {
    setInterval(() => {
      this.getMessages();
    }, 1000);
  }

  getMessages(){
    this.messageService.getSent().subscribe((messages: Message[]) => {
        this.messages = messages;
    });
  }

  onDeleteMessage(id: string){
    this.messageService.delete(id).subscribe();
  }

}
