export enum HttpStatus {
  Unauthorized = 401,
  Forbidden = 403,
  InternalServerError = 500,
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS', // Preflight...
  PATCH = 'PATCH',
}

export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
