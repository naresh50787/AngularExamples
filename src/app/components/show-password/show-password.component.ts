import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrls: ['./show-password.component.css']
})
export class ShowPasswordComponent implements OnInit {

  constructor() { }

  public inputType ='password';

  public  showPassword(event: any) {

    event.target.checked ? this.inputType='text' : this.inputType='password';
    /*if(event.target.checked == true){
      this.inputType = 'text';
    }else {
      this.inputType = 'password';
    }*/
    
  }

  ngOnInit(): void {
  }

}
