import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { WordType, Type } from 'src/app/data/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  word: WordType = null;
  private words = [];
  private subscription: Subscription;

  constructor(private wordsService: WordsService) {}

  ngOnInit(): void {
    this.subscription = this.wordsService
      .getWords()
      .subscribe((words: WordType[]) => {
        this.words = words;
        this.fetchWord();
      });
  }

  addToNouns(word: WordType): void {
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType) {
    this.wordsService.addVerb(word);
    this.fetchWord();
  }

  private fetchWord(): void {
    this.word = this.words.shift();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
