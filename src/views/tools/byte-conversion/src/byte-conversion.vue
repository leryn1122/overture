<template>
  <h1>Byte Conversion</h1>
  <t-space direction="vertical">
    <t-input-adornment>
      <template #prepend>
        <t-select
          :options="
            units.map((u: SizeUnit) => {
              return { label: u.unit as string, value: u.multiplier };
            })
          "
          default-value="bit"
          @change="unitSelector"
          class="unit"
        />
      </template>
      <t-input
        v-model="inputSize"
        :status="isValidInput"
        :clearable="true"
        placeholder="Input the number / size of bytes"
      />
    </t-input-adornment>
  </t-space>

  <div v-for="(bitOrByte, _index) in ['bit', 'bytes']">
    <h1>{{ changeCase.pascalCase(bitOrByte) }}</h1>
    <t-input-adornment
      v-for="(unit, _index) in units.filter((u) => {
        return u.unit.endsWith(bitOrByte == 'bit' ? bitOrByte : 'B');
      })"
      :prepend="unit.unit"
      class="unit"
    >
      <t-input
        :value="convertSize(inputSize, inputMultiplier, unit.multiplier)"
        placeholder=""
        disable
        :readonly="true"
      />
    </t-input-adornment>
  </div>
  <t-space direction="vertical">
    <h1>Infomation</h1>
    <p>
      <quote>1 GB = 1000 MB</quote> used by storage manufactors<br />
      <quote>1 GiB = 1024 MiB</quote> used by OS<br />
      <quote>1 Mbps = 1000 bit/s</quote> used by network operator<br />
    </p>
    <div>b - bit</div>
    <div>B - byte</div>
    <div>KB - kilobyte</div>
    <div>MB - megabyte</div>
    <div>GB - gigabyte</div>
    <div>TB - trillionbyte</div>
    <div>PB - petabyte</div>
    <div>EB - exabyte</div>
    <div>ZB - zettabyte</div>
    <div>YB - yottabyte</div>
  </t-space>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { InputProps, SelectProps } from 'tdesign-vue-next';

import { units, SizeUnit } from './sizeUnit';
import { Big, BigSource } from 'big.js';
import * as changeCase from 'change-case';

const inputSize = ref<string>('0');
const inputMultiplier = ref<string>('1');

const isValidInput = computed<InputProps['status']>(() => {
  return isNaN(+inputSize.value) ? 'error' : 'default';
});

const unitSelector: SelectProps['onChange'] = (ctx) => {
  inputMultiplier.value = ctx.toString();
};

/// Convert size from the multiplier into another one.
const convertSize = (bigNumber: BigSource, fromMultiplier: BigSource, toMultiplier: BigSource) => {
  try {
    return Big(bigNumber)
      .mul(fromMultiplier)
      .div(toMultiplier == 0 ? 1 : toMultiplier)
      .valueOf();
  } catch (e) {
    return '0';
  }
};
</script>

<style lang="less" scoped>
.t-space {
  width: 100%;
}

.t-input-adornment {
  &__text {
    width: 100px;
  }
}

.unit {
  width: 140px;
}
</style>
