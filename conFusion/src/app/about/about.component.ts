import { Component, OnInit, Inject } from '@angular/core';

import { baseURL } from '../shared/baseurl';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leadersErrorMessage!: string;
  leaders!: Leader[];

  constructor(private leaderService: LeaderService, @Inject('BaseURL') public BaseURL) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe({
      next: leaders => this.leaders = leaders, 
      error: errMess => this.leadersErrorMessage = errMess
    });
  }

}
