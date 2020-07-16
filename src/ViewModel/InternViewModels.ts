import {IIntern} from '../model/Intern';
 
type InternViewModel = {
    intern:IIntern,
    onClick?:Function,
    children?:any
}

export type {InternViewModel}