import { Component, OnInit } from '@angular/core';
import { Day } from '../day';
import { DAYS } from '../day_list';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  days = DAYS;

  constructor() { }

  ngOnInit() {
  }

}
