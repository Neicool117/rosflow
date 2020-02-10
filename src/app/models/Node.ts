import {Parameters} from '../models/Parameters'
import { Topic } from './Topic';

export class Node
{
    id:number;
    name:string;
    package:string;
    params:Parameters[];
    publishedTopics:Topic[];
    subscribedTopics:Topic[];
}