import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { WordType, Type } from 'src/app/data/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  word: WordType = null;

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType): void {
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType) {
    this.wordsService.addVerb(word);
    this.fetchWord();
  }

  check(): void {
    this.wordsService.check();
  }

  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift();
  }
}
