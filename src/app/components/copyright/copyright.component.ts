import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
dataString:any;
  constructor() { }

  ngOnInit(): void {

    let data=   new Date();
       this.dataString = data.getFullYear()
  


  }

}
