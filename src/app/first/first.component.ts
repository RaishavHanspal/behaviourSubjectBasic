import { Component, OnInit } from '@angular/core';
import { communicationService } from '../communication.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor( private comm : communicationService) { }
  current : string;
  newUser : string;
  ngOnInit(): void {
    this.comm.$user.subscribe(user => {this.current=user},
      err => {},
      () => {this.current = 'endded'}
      );
  }

  updateUser(){
    this.comm.updateUser(this.newUser);
  }

  endcomm(){
    this.comm.endSubject();
  }
}
