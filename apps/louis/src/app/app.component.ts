import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Message} from '@louis/api-interfaces';

@Component({
  selector: 'ls-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hello$ = this.http.get<Message>('/hello');
  constructor(private readonly http: HttpClient) {}
}
