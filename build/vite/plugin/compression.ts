import type { Plugin } from 'vite';
import compressPlugin from 'vite-plugin-compression';

export default function configCompressPlugin(
  compress: 'gzip' | 'brotli' | 'none',
  deleteOriginFile = false,
): Plugin | Plugin[] {
  const compressList = compress.split(',');

  let plugins: Plugin[] = [];
  let plugin = {
    filter: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
    verbose: true,
    disable: false,
    threshold: 2048,
  };

  if (compressList.includes('gzip')) {
    plugin = {
      ext: '.gz',
      algorithm: 'gzip',
      deleteOriginFile,
    };
    plugins.push(compressPlugin(plugin));
  }

  if (compressList.includes('brotli')) {
    plugin = {
      ext: '.br',
      algorithm: 'brotliCompress',
      deleteOriginFile,
    };
    plugins.push(compressPlugin(plugin));
  }

  return plugins;
}
