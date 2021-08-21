import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foreign-languages',
  templateUrl: './foreign-languages.component.html',
  styleUrls: ['./foreign-languages.component.css']
})
export class ForeignLanguagesComponent implements OnInit {

  public category = '';
  public items = [
    { 
      title: '',
      image: '',
      description: '',
      language: 'Chinese',
      category: 'Chinese',
      condition: '',
      price: ''
    },
    { 
      title: '',
      image: '',
      description: '',
      language: 'Spanish',
      category: 'Spanish',
      condition: '',
      price: ''
    },
    { 
      title: '',
      image: '',
      description: '',
      language: 'Russian',
      category: 'Russian',
      condition: '',
      price: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public selectLanguage(category){
    this.category = category;
  }
}
