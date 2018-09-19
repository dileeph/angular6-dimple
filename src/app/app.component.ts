import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { DataModel } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angu-d3js';

  data: Observable<DataModel>;

  constructor(private http: HttpClient) {
    this.data = this.http.get<DataModel>('assets/data/data.json');
  }
}
