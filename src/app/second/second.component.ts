import { Component, OnInit } from '@angular/core';
import { communicationService } from '../communication.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor( private comm : communicationService) { }
  current : string;
  ngOnInit(): void {
    this.comm.$user.subscribe(user => {this.current=user});
  }

}
