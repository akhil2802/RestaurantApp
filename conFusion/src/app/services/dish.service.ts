import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] {
    return DISHES;
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((featuredDish) => featuredDish.featured)[0];
  }
}
