import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-module',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css']
})
export class HomeModuleComponent implements OnInit {
  modalOpen = false;
items=[
  {title:'Why is the sky blue?',
   desc:"Gases and particles in Earth's atmosphere scatter sunlight in all directions. Blue light is scattered more than other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time."},
   {title:'how plant make their food?',
    desc:"Their roots take up water and minerals from the ground and their leaves absorb a gas called carbon dioxide (CO2) from the air. They convert these ingredients into food by using energy from sunlight."},
   {title:'Which food is best for eye?',
  desc:"Spinach, along with other dark leafy greens like collard greens and kale, contains two of the most essential antioxidants for eye health"}
]
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
