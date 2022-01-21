import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      };
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'this is login api',
      },
    },
  },
  {
    url: '/catalog',
    method: 'get',
    timeout: 2000,
    response: {
      code: 0,
      data: ['hello', '', ''],
    },
  },
] as MockMethod[];
