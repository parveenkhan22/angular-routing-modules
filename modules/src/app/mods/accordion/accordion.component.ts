import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
@Input() list=[];
openitemindex=0;
  constructor() { }

  ngOnInit() {
  }
onClick(index:number){
  this.openitemindex=index;
}
}
