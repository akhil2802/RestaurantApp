import { Component, OnInit, Inject } from '@angular/core';

import { baseURL } from '../shared/baseurl';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
