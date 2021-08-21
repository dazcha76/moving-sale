import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.css']
})
export class FitnessComponent implements OnInit {

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
