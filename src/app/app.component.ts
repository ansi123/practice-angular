import { ThrowStmt } from '@angular/compiler';
import { Component} from '@angular/core';
import {ServiceService} from './service.service'

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-angular';
  pam:"";
  constructor(private user:ServiceService){
    this.user.getData().subscribe(data=>{
      console.log("data is",data);
    });
    

  }
}
