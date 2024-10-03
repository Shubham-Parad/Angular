import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  dt = new Date();
  amt = 10000;
  str = 'shubham';
  arrobj = [
    {id:101,name:"John",salary:1000},
    {id:102,name:"Jane",salary:1111},
    {id:103,name:"Duke",salary:2000},
  ];
}
