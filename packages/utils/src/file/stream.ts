import { Nullable } from '@leryn/types/global';

export function dataUrlToBlob(base64Buf: string): Blob {
  const array = base64Buf.split(',');
  const typeItem = array[0];
  const mimetype = typeItem.match(/:(.*?);/)![1];
  const bstr = atob(array[1]);
  let n = bstr.length;
  const u8array = new Uint8Array(n);
  while (n--) {
    u8array[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8array], { type: mimetype });
}

export function urlToBase64(url: string, mimetype?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS') as Nullable<HTMLCanvasElement>;
    const ctx = canvas!.getContext('2d');

    const image = new Image();
    image.crossOrigin = '';
    image.onload = function () {
      if (!canvas || !ctx) {
        return reject();
      }
      canvas.height = image.height;
      canvas.width = image.width;
      ctx.drawImage(image, 0, 0);
      const dataURL = canvas.toDataURL(mimetype || 'image/png');
      canvas = null;
      resolve(dataURL);
    };
    image.src = url;
  });
}
