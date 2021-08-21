import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {

  public category = 'All'
  public items = [
    { 
      title: 'Capture the Flag: Reading Comprehension Game',
      image: 'capture-the-flag',
      description: 'In this fun-filled reading game, players read short passages and answer skill-building comprehension questions covering main idea, vocabulary and inference. Each correct answer lets players move through the maze toward the finish…with dead-ends and winding paths at every turn!',
      age: '9 yrs. - 10 yrs.',
      grade: '4th gr. - 5th gr.',
      category: 'Language Arts',
      condition: 'Line New',
      price: '$10'
    },
    { 
      title: 'Hazard Mountain: Inference Game',
      image: 'hazard-mountain',
      description: 'In this skill-building reading game, players read short paragraphs and answer follow-up questions by making inferences. Each correct answer moves them farther down the slope…but obstacles and ice patches may send them back to the top of the mountain!',
      age: '9 yrs. - 10 yrs.',
      grade: '4th gr. - 5th gr.',
      category: 'Language Arts',
      condition: 'Like New',
      price: '$10'
    },
    { 
      title: 'Main Street Shopping: Main Idea Game',
      image: 'main-street',
      description: 'In this skill-building reading game, players try to buy items at the Main Street Mall—by reading passages and identifying the main idea. Players earn money for each question they answer correctly…as they race from store to store in search of the items they need! ',
      age: '9 yrs. - 11 yrs.',
      grade: ' 4th gr. - 6th gr.',
      category: 'Language Arts',
      condition: 'Like New',
      price: '$10'
    },
    { 
      title: 'Outlast: Reading for Information Game',
      image: '',
      description: 'In this skill-building game, players read short passages and answer questions that challenge them to recall facts and details, analyze text and more. Each correct answer could earn them a survival medallion and get them closer to the finish line…if flash floods and forest fires don’t get in their way! ',
      age: '9 yrs. - 10 yrs.',
      grade: '4th gr. - 5th gr.',
      category: 'Language Arts',
      condition: 'Like New',
      price: '$10'
    },
    { 
      title: 'Quest for the Jewels: Cause & Effect Game',
      image: '',
      description: 'In this skill-building game, players read short passages and answer questions about cause and effect—collecting precious jewels along the way. Each correct answer could get them back to the palace…if they can make it past powerful genies and crocodile-infested waters! ',
      age: '9 yrs. - 10 yrs.',
      grade: '4th gr. - 5th gr.',
      category: 'Language Arts',
      condition: 'Like New',
      price: '$10'
    },
    { 
      title: 'Wipeout!: A Vocabulary Game',
      image: 'wipeout',
      description: 'In this skill-building reading game, players surf across the game board by completing sentences with the correct vocabulary words. Each correct answer gets them closer to the big finish…but broken boards and treacherous rocks may send them paddling back out! ',
      age: '9 yrs. - 10 yrs.',
      grade: '4th gr. - 5th gr.',
      category: 'Language Arts',
      condition: 'Like New',
      price: '$10'
    },
    { 
      title: '',
      image: '',
      description: '',
      age: '',
      grade: '',
      category: '',
      condition: '',
      price: ''
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public selectCategory(category){
    this.category = category;
  }

}
