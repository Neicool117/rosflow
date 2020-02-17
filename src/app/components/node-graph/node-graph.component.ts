import { Component, OnInit } from '@angular/core';
import {Node} from '../../models/Node';
import { Connection } from 'src/app/models/Connection';

@Component({
  selector: 'app-node-graph',
  templateUrl: './node-graph.component.html',
  styleUrls: ['./node-graph.component.sass']
})
export class NodeGraphComponent implements OnInit {

  nodes:Node[];
  connections:Connection[];

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
              name:"input1",
              messageType:"Image"
            },
            {
              name:"input2",
              messageType:"String"
            }
          ]
      },

      {
          id:1,
          name:"Other cool node",
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
              name:"input1",
              messageType:"Image"
            },
            {
              name:"input2",
              messageType:"String"
            }
          ]
      }
    ]

    this.connections = [
      {
        sourceId: this.nodes[0].id,
        targetId: this.nodes[1].id,
        sourceTopic: this.nodes[0].publishedTopics[0],
        targetTopic: this.nodes[1].subscribedTopics[0]
      }
    ]
  }

}
