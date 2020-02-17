import { Component, OnInit, Input } from '@angular/core';
import { Connection } from 'src/app/models/Connection';
import { Position } from 'src/app/models/Position';
import { DraggingService } from 'src/app/services/dragging.service';
import { onErrorResumeNext } from 'rxjs';

@Component({
  selector: 'app-node-connection',
  templateUrl: './node-connection.component.html',
  styleUrls: ['./node-connection.component.sass']
})
export class NodeConnectionComponent implements OnInit {
  @Input() connection:Connection;
  width:number;
  height:number;
  svgPosition:Position;
  svgStart:Position;
  svgEnd:Position;
  sourcePosition:Position;
  targetPosition:Position;
  pathString:string;

  constructor(private draggingService:DraggingService) { 
    this.svgPosition = new Position;
    this.svgStart = new Position;
    this.svgEnd = new Position;
  }

  update(): void {
      this.width = Math.abs(this.targetPosition.x - this.sourcePosition.x);
      this.height = Math.abs(this.targetPosition.y - this.sourcePosition.y);

      if(this.targetPosition.x < this.sourcePosition.x)
      {
        this.svgPosition.x = this.targetPosition.x;
        this.svgStart.x = this.width;
        this.svgEnd.x = 0;
      }
      else
      {
        this.svgPosition.x = this.sourcePosition.x;
        this.svgStart.x = 0;
        this.svgEnd.x = this.width;
      }

      if(this.targetPosition.y < this.sourcePosition.y)
      {
        this.svgPosition.y = this.targetPosition.y;
        this.svgStart.y = this.height;
        this.svgEnd.y = 0;
      }
      else 
      {
        this.svgPosition.y = this.sourcePosition.y;
        this.svgStart.y = 0;
        this.svgEnd.y = this.height;
      }

      
  }

  ngOnInit(): void {
    
    this.sourcePosition = this.connection.source.position;
    this.targetPosition = this.connection.target.position;
    this.update();

    this.draggingService.getObservable(this.connection.source.node.id).subscribe( position =>
      {
        if(position != undefined)
        {
          this.update();
          this.sourcePosition = position;
          
        }
      }
      )

    this.draggingService.getObservable(this.connection.target.node.id).subscribe(position =>
        {
          if(position != undefined)
          {
            this.targetPosition = position;
            this.update();
          }
        }
    )
  }
}
