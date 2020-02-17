import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../models/Position';

@Injectable({
  providedIn: 'root'
})
export class DraggingService {

  draggingObservables:Observable<Position>[];
  ids:number[];
  constructor() { 
    this.draggingObservables = [];
    this.ids = [];
  }

  register(id:number, observable:Observable<Position> )
  {
    this.draggingObservables.push(observable);
    this.ids.push(id);
  }

  getObservable(id:number) : Observable<Position>
  {
    let index = this.ids.findIndex((element) => element == id);
    return this.draggingObservables[index];
  }
}
