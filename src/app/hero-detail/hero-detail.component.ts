import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    
  }

  Save(heroName:string):void{
    this.hero.name=heroName;
    this.heroService.update(this.hero);
  }

  Delete():void{
    this.heroService.delete(this.hero);
  }

}