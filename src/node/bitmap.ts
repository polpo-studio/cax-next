import Node from './node';
import { ILRUCache, MakeLRUCache } from '../utils/lru';

interface Img {
  [x: string]: any;
}

class Bitmap extends Node {
  static cache: ILRUCache;
  img: Img;
  rect: number[];
  width: number;
  height: number;

  constructor(img: Img) {
    super();
    let image = Bitmap.cache.get(img.src, false);
    if (image) {
      this.img = image;
      this.rect = [0, 0, this.img.width, this.img.height];
      this.width = this.img.width;
      this.height = this.img.height;
    } else {
      this.img = img;
      this.rect = [0, 0, img.width, img.height];
      this.width = img.width;
      this.height = img.height;
      Bitmap.cache.put(img.src, image);
    }
  }

  render(ctx: any) {
    let rect = this.rect;
    ctx.drawImage(this.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
  }
}

Bitmap.cache = MakeLRUCache(50);

export default Bitmap;
