import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { of, delay, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaderById(id: number): Observable<Leader> {
    return of(LEADERS.filter((leader) => leader.id === id)[0]).pipe(delay(2000));
  }

  getLeaders(): Observable<Leader[]> {
    return of(LEADERS).pipe(delay(2000));
  }

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((featuredLeader) => featuredLeader.featured)[0]).pipe(delay(2000));
  }
}
