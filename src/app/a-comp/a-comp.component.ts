import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-a-comp',
  templateUrl: './a-comp.component.html',
  styleUrls: ['./a-comp.component.css']
})
export class ACompComponent implements OnInit {
  router = null;
  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit(): void {
  }


  goToPage(){
    this.router.navigate(['/b', 'Zvi']);
  }
}
