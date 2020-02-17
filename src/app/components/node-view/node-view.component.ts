import { Component, OnInit, Input, Output } from '@angular/core';
import { NodeViewModel } from 'src/app/models/NodeViewModel';
import { Observable, BehaviorSubject } from 'rxjs';
import { Position } from 'src/app/models/Position';
import { DraggingService } from 'src/app/services/dragging.service';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.css']
})
export class NodeViewComponent implements OnInit {
  @Input() nodeview:NodeViewModel;
  private positionObservable:BehaviorSubject<Position>;

  constructor(private draggingService: DraggingService) {
   }

  ngOnInit(): void 
  {
    this.positionObservable = new BehaviorSubject(this.nodeview.position);
    this.draggingService.register(this.nodeview.node.id, this.positionObservable.asObservable());
  }

  onMove(event)
  {
    this.positionObservable.next({x: event.x, y:event.y}); 
  }
}
