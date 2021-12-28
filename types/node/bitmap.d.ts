import Node from './node';
import { ILRUCache } from '../utils/lru';
interface Img {
    [x: string]: any;
}
declare class Bitmap extends Node {
    static cache: ILRUCache;
    img: Img;
    rect: number[];
    width: number;
    height: number;
    constructor(img: Img);
    render(ctx: any): void;
}
export default Bitmap;
