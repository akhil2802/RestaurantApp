import { Injectable } from '@angular/core';

import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { of, delay, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotion(id: number): Observable<Promotion> {
    return of(PROMOTIONS.filter((promo) => promo.id === id)[0]).pipe(delay(2000));
  }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return of(PROMOTIONS.filter((featuredPromo) => featuredPromo.featured)[0]).pipe(delay(2000));
  }
}
