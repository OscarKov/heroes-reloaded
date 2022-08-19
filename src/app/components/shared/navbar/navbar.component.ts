import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, HeroeType } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

}
