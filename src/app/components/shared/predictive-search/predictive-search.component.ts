import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeroesService, HeroeType } from "src/app/services/heroes.service";

@Component({
  selector: "app-predictive-search",
  templateUrl: "./predictive-search.component.html",
  styleUrls: ["./predictive-search.component.css"],
})
export class PredictiveSearchComponent implements OnInit {
  searchValue = "";
  heroList: HeroeType[] = [];
  resultList: HeroeType[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
    this.heroList = this._heroesService.getHeroe();
  }

  ngOnInit(): void {}

  searchValueChange($event: Event) {
    this.searchValue = (<HTMLInputElement>$event.target).value;
    this.resultList = this.heroList.filter(
      (hero) =>
        hero.nombre.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1
    );
  }

  onHeroSelect(selectedHero: HeroeType) {
    let idx = this.heroList.findIndex((hero) => selectedHero === hero);
    if (idx !== -1) {
      this.router.navigate(["/heroeD", idx]);
    }
    this.searchValue = "";
  }
}
