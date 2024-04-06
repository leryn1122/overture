export interface Menu {
  // Identifier
  key: string | number | Symbol;
  name: string;
  path: string;
  icon?: string;
  children?: Menu[];
  label?: Node | string;
}
