import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];
  selectedHero: Hero;

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: HERO): void {
    if (!this.selectedHero || hero.id !== this.selectedHero.id) {
      this.selectedHero = hero;
    } else {
      this.selectedHero = null;
    }
  }

  ngOnInit() {
    this.getHeroes();
  }

}
