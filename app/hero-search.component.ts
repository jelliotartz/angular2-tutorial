//tslint:disable

import {
  Component,
  OnInit,
} from '@angular/core'

import { Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { HeroSearchService } from './hero-search.service'
import { Hero } from './hero'

@Component({
  selector: 'hero-search',
  templateUrl: 'app/hero-search.component.html',
  styleUrls: ['app/hero-search.component.css'],
  providers: [ HeroSearchService ]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>
  private searchTerms = new Subject<string>()

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { /* */ }

  //NOTE(james): push a search term into the observable stream.
  search(term: string ): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)                       // debounceTime
      .distinctUntilChanged()                  // distinctUntilChanged
      .switchMap(term => term                  // switchMap
        ? this.heroSearchService.search(term)  // search
        : Observable.of<Hero[]>([])            // Observable.of
      )
    .catch(error => {
      console.log(error)
      return Observable.of<Hero[]>([])
    })
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id]
    this.router.navigate(link)
  }

}
