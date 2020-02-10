import { Component, OnInit, Input } from '@angular/core';
import { Node } from 'src/app/models/Node';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.css']
})
export class NodeViewComponent implements OnInit {
  @Input() node:Node;

  constructor() { }

  ngOnInit(): void {
  }

}
