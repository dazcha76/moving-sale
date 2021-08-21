import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css']
})
export class CampingComponent implements OnInit {

  public items = [
    { 
      title: '',
      image: '',
      description: '',
      condition: '',
      price: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
