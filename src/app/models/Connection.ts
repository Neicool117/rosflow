import { Topic } from '../models/Topic' 

export class Connection
{
    sourceId:number;
    targetId:number;
    targetTopic:Topic;
    sourceTopic:Topic;
}