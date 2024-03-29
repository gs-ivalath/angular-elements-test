import { Component, OnInit } from '@angular/core';
import { CoolService } from '../cool.service';

@Component({
  selector: 'app-my-btn',
  templateUrl: './my-btn.component.html',
  styleUrls: ['./my-btn.component.css']
})
export class MyBtnComponent implements OnInit {
  btnInstance: any;
  constructor(public cool: CoolService) {
    this.btnInstance = Math.random();
  }

  ngOnInit() { }
}
