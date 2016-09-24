//tslint:disable

import {
  Component,
  Input,
  OnInit,
} from '@angular/core'

import {
  ActivatedRoute,
  Params,
} from '@angular/router'

import { HeroService } from './hero.service'
import { Hero } from './hero'

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
    ) {
  }

  @Input() hero: Hero

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'] // NOTE: route parameters are always strings; so we convert route parameter from string to number with '+'
      this.heroService.getHero(id).then(hero => this.hero = hero)
    })
  }

  goBack(): void {
    window.history.back()
  }

  save(): void {
    this.heroService.update(this.hero)
                    .then(this.goBack)
  }
}
