import { Component, OnInit } from '@angular/core';
import {Node} from '../../models/Node';

@Component({
  selector: 'app-node-graph',
  templateUrl: './node-graph.component.html',
  styleUrls: ['./node-graph.component.sass']
})
export class NodeGraphComponent implements OnInit {

  nodes:Node[];

  constructor() { }

  ngOnInit(): void {
    this.nodes = 
    [
      {
        id:0,
        name:"Cool Node",
        package:"Nice Package",
        params:[
          {
            name:"attr1",
            value:"value",
            valuetype:"string"
          },
          {
            name:"attr2",
            value:"0",
            valuetype:"number"
          }
        ],
        publishedTopics:[
          {
            name:"output",
            messageType:"String"
          }
        ],
        subscribedTopics:[
          {
            name:"input",
            messageType:"Image"
          }
        ]
      }
    ]


  }

}
