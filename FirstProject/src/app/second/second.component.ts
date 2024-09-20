import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent {
  scol:string="red";
  mcol:string="color:blue;background:yellow;text-decoration:underline";
  sclass="c1";
  mclass={
    c1:true,
    c2:false,
    c3:true
  };
  mydata:any;
  mycolor:any;
  fun(name:any){
    this.mycolor=name;
  };
  myvalue:any;
  add:number=0;
  func2(a:any,b:any){
    a=parseInt(a);
    b=parseInt(b);
    this.add=a+b;
  }
}
