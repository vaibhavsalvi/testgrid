import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
 
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
 
@Injectable()
export class HeroService {
 
  constructor(private messageService: MessageService) { }
 
  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  add(hero:string): void{
    let _hero= new Hero();
   _hero.id=190;
   _hero.name=hero;
    HEROES.push(_hero);
  }

  update(hero:Hero): void{
    var index=HEROES.findIndex((x)=>x.id==hero.id);
    HEROES[index].name=hero.name;
    alert('Saved ' + hero.name + ' from service');
    
  }

  delete(hero:Hero): void{
    var index=HEROES.findIndex((x)=>x.id==hero.id);
    if (index > -1) {
    HEROES.splice(index, 1);
}
  }
}