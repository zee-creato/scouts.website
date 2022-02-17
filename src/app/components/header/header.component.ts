import { Component, OnInit } from '@angular/core';
import { Header} from './header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


header:Header[]=[
new Header('Home' , '/'),
new Header('Beavers','/beavers'),
new Header('Cubs','/cubs'),
new Header('Scouts','/scouts'),
new Header('Squirrels','/squirrels'),
new Header('How to Join','/join'),
new Header('About Us','/about'),
];


isSelected?:Header;


add(item:Header){


this.isSelected=item

console.log(this.isSelected);

}









  constructor() { }

  ngOnInit(): void {
  }













}
