import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-a-comp',
  templateUrl: './a-comp.component.html',
  styleUrls: ['./a-comp.component.css']
})
export class ACompComponent implements OnInit {
  router = null;
  data = null;
  category = '';
  constructor(router: Router, route: ActivatedRoute) { 
    this.router = router;
    console.log(route.snapshot.params.category);
    
  
    
    this.category = route.snapshot.params.category;

  }

  ngOnInit(): void {
    fetch(`http://localhost:4000/games/${this.category}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.data = data;
    });
  }


  goToPage(id){
    console.log(id);
    this.router.navigate(['/game', id]);
  }
}
