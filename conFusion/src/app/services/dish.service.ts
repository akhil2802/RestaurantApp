import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDish(id: number): Promise<Dish> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES.filter((dish) => dish.id === id)[0]), 2000)
    });
  }

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(DISHES), 2000)
    });
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(resolve => { setTimeout(() => resolve(DISHES.filter((featuredDish) => featuredDish.featured)[0]), 2000)});
  }
}
