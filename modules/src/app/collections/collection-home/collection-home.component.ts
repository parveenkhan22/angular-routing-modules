import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data=[
    {name:'parveen', age:'23', job:'web developer'},
    {name:'achin', age:'24', job:'fullstack web developer'},
    {name:'deepika', age:'22', job:'designer'},
    {name:'shalini', age:'22',job:'android developer'},
    {name:'garvit', age:'24',job:'Animation'}
  ];

  header=[
    {key:'name', label:'Name'},
    {key:'age', label:'Age'},
    {key:'job', label:'Job'},

  ];
  
  constructor() { }

  ngOnInit() {
  }

}
