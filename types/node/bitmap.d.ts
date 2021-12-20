import Node from './node';
interface Img {
    [x: string]: any;
}
interface Cache {
    [x: string]: any;
}
declare class Bitmap extends Node {
    static cache: Cache;
    img?: Img;
    rect?: number[];
    width?: number;
    height?: number;
    url: string;
    constructor(url: string);
    render(ctx: any): void;
}
export default Bitmap;
