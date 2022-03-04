export declare type ErrorPage = {
  title: string;
  img: string;
  desc: string;
};

export function errorPage(errorCode: number): ErrorPage {
  switch (errorCode) {
    case 403:
      return {
        title: '403',
        img: 'https://leryn-website.oss-cn-shanghai.aliyuncs.com/img/ana.jpg',
        desc: 'Sorry, you are unauthorized.',
      };
    case 404:
      return {
        title: '404',
        img: 'https://leryn-website.oss-cn-shanghai.aliyuncs.com/img/mercy_and_moira.jpg',
        desc: 'Sorry, page not found.',
      };
    case 500:
      return {
        title: '500',
        img: 'https://leryn-website.oss-cn-shanghai.aliyuncs.com/img/pharah.jpg',
        desc: 'Sorry, internal server erorr occurred.',
      };
    default:
      throw new Error('Not appropriate error code.');
  }
}

export default errorPage;
