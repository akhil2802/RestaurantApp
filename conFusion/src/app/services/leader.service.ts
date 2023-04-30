import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaderById(id: any): Leader {
    return LEADERS.filter((leader) => leader.id === id)[0];
  }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((featuredLeader) => featuredLeader.featured)[0];
  }
}
