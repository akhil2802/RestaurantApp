import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  featuredDish!: Dish;
  featuredPromotion!: Promotion;
  featuredLeader!: Leader;

  dishErrorMessage!: string;
  promoErrorMessage!: string;
  leaderErrorMessage!: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderService: LeaderService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish().subscribe({
      next: dish => this.featuredDish = dish,
      error: errMess => this.dishErrorMessage = errMess
    });
    
    this.promotionservice.getFeaturedPromotion().subscribe({
      next: promo => this.featuredPromotion = promo,
      error: errMess => this.promoErrorMessage = errMess
    });

    this.leaderService.getFeaturedLeader().subscribe({
      next: leader => this.featuredLeader = leader,
      error: errMess => this.leaderErrorMessage = errMess
    });
  }

}
