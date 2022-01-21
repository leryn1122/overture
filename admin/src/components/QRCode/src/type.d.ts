import { QRCodeSegment, QRCodeRenderersOptions } from 'qrcode';

export type Content = string | QRCodeSegment[];

export interface RenderQrCodeParams {
  canvas: any;
  content: Content;
  width?: number;
  options?: QRCodeRenderersOptions;
  logo?: string;
  image?: HTMLImageElement;
  download?: Boolean;
}
