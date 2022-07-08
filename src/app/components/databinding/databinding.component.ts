import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  public title:string = 'Angular';
  public image:string ='https://media.istockphoto.com/photos/taj-mahal-mausoleum-in-agra-picture-id1146517111?k=20&m=1146517111&s=612x612&w=0&h=vHWfu6TE0R5rG6DJkV42Jxr49aEsLN0ML-ihvtim8kk=';
  public count =0;
  constructor() { }

  ngOnInit(): void {
  }

  public incrementCount(){
    this.count = this.count+1;
  }

  public decrementCount(){
    this.count = this.count-1 >0 ? this.count-1 : 0;
  }

}
