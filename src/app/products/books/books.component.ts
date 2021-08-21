import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

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
