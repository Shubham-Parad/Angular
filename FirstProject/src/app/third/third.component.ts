import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
})
export class ThirdComponent {
  con = false;
  //check weather odd or even using ngIf
  num: any;
  //Show list of employees using ngFor
  arrObj = [
    {
      id: 1,
      name: 'Alice Smith',
      position: 'Software Engineer',
      department: 'Development',
      salary: 1000,
    },
    {
      id: 2,
      name: 'Bob Johnson',
      position: 'Product Manager',
      department: 'Product',
      salary: 500,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      position: 'Designer',
      department: 'Design',
      salary: 1000,
    },
    {
      id: 4,
      name: 'Diana Prince',
      position: 'Marketing Specialist',
      department: 'Marketing',
      salary: 2000,
    },
    {
      id: 5,
      name: 'Edward Elric',
      position: 'Data Analyst',
      department: 'Analytics',
      salary: 1900,
    },
  ];
  fno: any;
  sno: any;
  choice: any;
  res: any;
}
