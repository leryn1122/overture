import Big from 'big.js';

export interface SizeUnit {
  unit: string;
  multiplier: string;
}

export const units: Array<SizeUnit> = (() => {
  const data = {
    bit: 1,
    Kbit: 1_000,
    Mbit: 1_000_000,
    Gbit: 1_000_000_000,
    Kibit: 1 << 10,
    Mibit: 1 << 20,
    Gibit: 1 << 30,
    B: 8,
    KB: 8_000,
    MB: 8_000_000,
    GB: 8_000_000_000,
    KiB: (8 * 1) << 10,
    MiB: ((8 * 1) << 10) << 10,
    GiB: Big(8)
      .mul(1 << 10)
      .mul(1 << 10)
      .mul(1 << 10),
  };

  let result: Array<SizeUnit> = [];
  for (const item in data) {
    // @ts-ignore
    let value: number | Big = data[item];

    result.push({
      unit: item,
      multiplier: value instanceof Big ? value.valueOf() : value.toString(),
    });
  }

  return result;
})();
