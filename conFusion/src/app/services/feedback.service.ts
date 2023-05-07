import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
// import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  /** POST: add a new hero to the database */
  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<Feedback>(baseURL + 'feedback/', feedback, httpOptions)
      .pipe(
        catchError(this.processHTTPMsgService.handleError));
  }
}

// constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

// putDish(dish: Dish): Observable<Dish> {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     };
//     return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
//       .pipe(catchError(this.processHTTPMsgService.handleError));
//   }