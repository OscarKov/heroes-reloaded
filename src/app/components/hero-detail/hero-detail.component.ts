import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, HeroeType } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-detalle',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetalleComponent implements OnInit {

  hero!: HeroeType;
  constructor(private activateRoute: ActivatedRoute,
    private _heroeD: HeroesService) {
    this.activateRoute.params.subscribe(params => {
      console.log(params)
      this.hero = _heroeD.getHeroeDetalle(params['id'])

    })
  }

  ngOnInit(): void {
  }

}
