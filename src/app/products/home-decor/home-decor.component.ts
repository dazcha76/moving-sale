import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-decor',
  templateUrl: './home-decor.component.html',
  styleUrls: ['./home-decor.component.css']
})
export class HomeDecorComponent implements OnInit {

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
