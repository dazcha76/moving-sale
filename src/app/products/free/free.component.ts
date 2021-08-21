import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.css']
})
export class FreeComponent implements OnInit {

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
