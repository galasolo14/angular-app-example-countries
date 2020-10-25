import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  route = null;
  id = '';
  game = null;

  constructor(route: ActivatedRoute) {
    this.route = route;
    console.log(route.snapshot.params.id);
    
  
    
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    fetch(`http://localhost:4000/games/game/${this.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.game = data;
    });
  }

}
