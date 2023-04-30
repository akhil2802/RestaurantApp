import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredDish!: Dish;
  featuredPromotion!: Promotion;
  featuredLeader!: Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, private leaderService: LeaderService) { }

  ngOnInit(): void {
    this.featuredDish = this.dishservice.getFeaturedDish();
    this.featuredPromotion = this.promotionservice.getFeaturedPromotion();
    this.featuredLeader = this.leaderService.getFeaturedLeader();
  }

}
