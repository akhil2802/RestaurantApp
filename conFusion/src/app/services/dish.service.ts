import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { of, delay, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id));
  } 

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.id === id)[0]).pipe(delay(2000));
  }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((featuredDish) => featuredDish.featured)[0]).pipe(delay(2000));
  }
}
