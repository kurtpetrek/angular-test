import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from './../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor() { }

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero: HERO): void {
    if (!this.selectedHero || hero.id !== this.selectedHero.id) {
      this.selectedHero = hero;
    } else {
      this.selectedHero = null;
    }

  }

  ngOnInit() {
  }

}
