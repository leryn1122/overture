// noinspection RedundantIfStatementJS
export function isEmpty(object: any): boolean {
  if (typeof object === 'string') {
    return object.length === 0;
  } else if (object instanceof Array) {
    return object.length === 0;
  } else if (object instanceof Set) {
    return object.size === 0;
  } else if (object === null) {
    return true;
  } else if (object === undefined) {
    return true;
  } else {
    return false;
  }
}

export function isNotEmpty(object: any): boolean {
  return !isEmpty(object);
}

/**
 * Object toString method.
 * @param object
 * @returns
 */
export function toString(object: any): string {
  if (typeof object === 'string') {
    return object;
  } else if (object === null) {
    return 'null';
  } else if (object === undefined) {
    return 'undefined';
  } else {
    return JSON.stringify(object);
  }
}

/**
 * Deep clone object through JSON serialization and deserialization
 * @param object
 */
export function clone<E extends any>(object: E): E {
  const json = JSON.stringify(object);
  return JSON.parse(json);
}

export function nothing() {}
