import { Component, OnInit } from '@angular/core';
import {NodeViewModel} from '../../models/NodeViewModel';
import { Connection } from 'src/app/models/Connection';

@Component({
  selector: 'app-node-graph',
  templateUrl: './node-graph.component.html',
  styleUrls: ['./node-graph.component.sass']
})
export class NodeGraphComponent implements OnInit {

  nodes:NodeViewModel[];
  connections:Connection[];

  constructor() { }

  ngOnInit(): void {
    this.nodes = 
    [
      {
        node:{
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
        position: {
          x:220,
          y:230
        }
      },

      {
        node:{
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
        },
        position: {
          x:800,
          y:450
        }
      }
    ]

    this.connections = [
      {
        source: this.nodes[0],
        target: this.nodes[1]
      }
    ]
  }

}
