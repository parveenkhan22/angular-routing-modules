import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
stats=[
  {value:'34',label:'# of users'},
  {value:'500',label:'Revenue'},
  {value:'62',label:'Reviews'}
];

lists=[
  {image:'/assets/images/bag.jpg', title:'bag',desc:'beatifull yellow bag'},
  {image:'/assets/images/hat.jpg', title:'hat',desc:'awesome hat'},
  {image:'/assets/images/shoe.jpg', title:'shoe',desc:'durable stylish shoe'}
];
  constructor() { }

  ngOnInit() {
  }

}
