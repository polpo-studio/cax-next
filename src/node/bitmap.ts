import Node from './node';

interface Img {
  [x: string]: any;
}

interface Cache {
  [x: string]: any;
}

class Bitmap extends Node {
  static cache: Cache;
  img?: Img;
  rect?: number[];
  width?: number;
  height?: number;
  url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  render(ctx: any) {
    if (this.img) {
      let rect = this.rect!;
      ctx.drawImage(this.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
    } else {
      // @ts-ignore
      this.stage?.loadImage(this.url).then((img: Img) => {
        this.img = img;
        this.rect = [0, 0, img.width, img.height];
        this.width = img.width;
        this.height = img.height;
        let rect = this.rect!;
        ctx.drawImage(this.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3]);
        Bitmap.cache[img.src] = img;
      }).catch((err) => {
        console.log('Bitmap: Error loading image: ' + err, this.url);
      });
    }
  }
}

Bitmap.cache = {};

export default Bitmap;
