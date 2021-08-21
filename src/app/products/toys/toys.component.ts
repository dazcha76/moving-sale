import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent implements OnInit {

  public items = [
    { 
      title: 'Classic Play Money Set',
      image: 'money',
      description: 'With fifty of each denomination, this set includes familiar looking paper bills and plastic coins. This stash of cash conveniently stores in a handy wooden "cash drawer" box. Each compartment has the denomination printed inside for easy matching cleanup.',
      age: '3+ years',
      grade: '',
      condition: 'Like New',
      price: '$10'
    },
    { 
      title: 'Real-Working Cash Register',
      image: 'cash-register',
      description: 'Kids can ring up the fun with our real-working cash register! The built-in calculator and digital display let kids add, subtract, multiply and divide as they ring up pretend purchases. The cash drawer even pops open so children can figure out the correct change! The cash register has a large, solar-powered digital display; includes a “credit card” and play money.',
      age: '3 yrs. - 9 yrs.',
      grade: 'Preschool - 4th gr.',
      condition: 'Like New',
      price: '$15'
    },
    { 
      title: 'What Should You Do? A Game of Consequences',
      image: '',
      description: 'In this fun-filled game of consequences, players face everyday dilemmas that deal with topics like honesty, bullying, manners and more. As children race around the game board, they take turns deciding what they should do in each situation—moving closer to the finish line with each correct answer! ',
      age: '5 yrs. - 11 yrs.',
      grade: 'Kindergarten - 6th gr.',
      condition: 'Like New',
      price: '$10'
    },
    { 
      title: '',
      image: '',
      description: '',
      age: '',
      grade: '',
      condition: '',
      price: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
