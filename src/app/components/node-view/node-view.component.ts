import { Component, OnInit, Input, Output } from '@angular/core';
import { Node } from 'src/app/models/Node';
import { Observable, BehaviorSubject } from 'rxjs';
import { Position } from 'src/app/models/Position';
import { DraggingService } from 'src/app/services/dragging.service';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.css']
})
export class NodeViewComponent implements OnInit {
  @Input() node:Node;
  private positionObservable:BehaviorSubject<Position>;

  constructor(private draggingService: DraggingService) {
   }

  ngOnInit(): void 
  {
    this.positionObservable = new BehaviorSubject(new Position());
    this.draggingService.register(this.node.id, this.positionObservable.asObservable());
  }

  onMove(event)
  {
    this.positionObservable.next({x: event.x, y:event.y}); 
  }
}
