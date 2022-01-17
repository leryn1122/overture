export function trim(string: string): string {
  return string.replace(/(^\s*)|(\s*$)/g, '');
}
