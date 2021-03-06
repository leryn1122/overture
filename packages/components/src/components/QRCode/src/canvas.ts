import type { QRCodeRenderersOptions } from 'qrcode';
import { toCanvas } from 'qrcode';

import type { Content, RenderQrCodeParams } from './type';

export const renderQRCode = ({ canvas, content, width = 0, options: params = {} }: RenderQrCodeParams) => {
  const options = {...params};
  // 容错率: 默认对内容少的二维码采用高容错率, 内容多的二维码采用低容错率
  options.errorCorrectionLevel = options.errorCorrectionLevel || getErrorCorrectionLevel(content);

  return getOriginWidth(content, options).then((_width: number) => {
    options.scale = width === 0 ? undefined : (width / _width) * 4;
    return toCanvas(canvas, content, options);
  });
};

function getOriginWidth(content: Content, options: QRCodeRenderersOptions) {
  const _canvas = document.createElement('canvas');
  return toCanvas(_canvas, content, options).then(() => _canvas.width);
}

function getErrorCorrectionLevel(content: Content) {
  if (content.length > 36) {
    return 'M';
  } else if (content.length > 16) {
    return 'Q';
  } else {
    return 'H';
  }
}
