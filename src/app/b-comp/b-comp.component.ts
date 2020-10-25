import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-b-comp',
  templateUrl: './b-comp.component.html',
  styleUrls: ['./b-comp.component.css']
})
export class BCompComponent implements OnInit {
  route = null;

  constructor(route: ActivatedRoute) {
    console.log(route);
    this.route = route;
    console.log(route.snapshot.paramMap.get('name'));
    console.log(route.snapshot.params.name);
   }

  ngOnInit(): void {
    console.log(this.route);
  }

}
