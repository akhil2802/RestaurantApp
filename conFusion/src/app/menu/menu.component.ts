import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes!: Dish[];
  errorMessage!: string;

  constructor(private dishService: DishService, @Inject('BaseURL') public BaseURL) { }
  
  ngOnInit(): void {
    this.dishService.getDishes().subscribe({
      next: (dishes) => {this.dishes = dishes}, 
      error: (errorMss) => this.errorMessage = <any>errorMss 
    });
  }

}
