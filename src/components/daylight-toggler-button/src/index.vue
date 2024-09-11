<template>
  <div class="components">
    <div class="main-button" @click="onClickButton" @mousemove="onMouseMove" @mouseout="onMouseOut">
      <div v-for="_count in 3" class="moon"></div>
    </div>
    <div v-for="_count in 3" class="daytime-backgrond"></div>
    <div class="cloud">
      <div v-for="_count in 6" class="cloud-son"></div>
    </div>
    <div class="cloud-shadow">
      <div v-for="_count in 6" class="cloud-son"></div>
    </div>
    <div class="stars">
      <div class="star big">
        <div v-for="_count in 4" class="star-son"></div>
      </div>
      <div class="star big">
        <div v-for="_count in 4" class="star-son"></div>
      </div>
      <div class="star medium">
        <div v-for="_count in 4" class="star-son"></div>
      </div>
      <div class="star medium">
        <div v-for="_count in 4" class="star-son"></div>
      </div>
      <div class="star small">
        <div v-for="_count in 4" class="star-son"></div>
      </div>
      <div class="star small">
        <div v-for="_count in 4" class="star-son"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isMoved = ref<boolean>(false);
const isClicked = ref<boolean>(false);

const $ = (classname: string) => {
  return Array.from(document.getElementsByClassName(classname) as HTMLCollectionOf<HTMLElement>);
};

const onClickButton = (_event: MouseEvent) => {
  if (isMoved.value) {
    $('main-button').forEach((e) => {
      e.style.setProperty('transform', 'translateX(0)');
      e.style.setProperty('background-color', 'rgba(255, 195, 35,1)');
      e.style.setProperty(
        'box-shadow',
        '3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 230, 80,1)',
      );
    });

    $('daytime-backgrond').forEach((e) => {
      e.style.setProperty('transform', 'translateX(0)');
    });

    $('cloud').forEach((e) => {
      e.style.setProperty('transform', 'translateY(10px)');
    });

    $('cloud-shadow').forEach((e) => {
      e.style.setProperty('transform', 'translateY(10px)');
    });

    $('components').forEach((e) => {
      e.style.setProperty('background-color', 'rgba(70, 133, 192,1)');
    });

    $('moon').forEach((e) => {
      e.style.setProperty('opacity', '0');
    });

    $('stars').forEach((e) => {
      e.style.setProperty('transform', 'translateY(-125px)');
      e.style.setProperty('opacity', '0');
    });
    // openOrCloseTime(cloudTimer)
    document.body.setAttribute('theme-mode', 'light');
  } else {
    $('main-button').forEach((e) => {
      e.style.setProperty('transform', 'translateX(110px)');
      e.style.setProperty('background-color', 'rgba(195, 200,210,1)');
      e.style.setProperty(
        'box-shadow',
        '3px 3px 5px rgba(0, 0, 0, 0.5), inset  -3px -5px 3px -3px rgba(0, 0, 0, 0.5), inset  4px 5px 2px -2px rgba(255, 255, 210,1)',
      );
    });

    $('daytime-backgrond').forEach((e) => {
      e.style.setProperty('transform', 'translateX(0px)');
    });

    let elements = $('daytime-backgrond');
    elements[0].style.setProperty('transform', 'translateX(110px)');
    elements[1].style.setProperty('transform', 'translateX(80px)');
    elements[2].style.setProperty('transform', 'translateX(50px)');

    $('cloud').forEach((e) => {
      e.style.setProperty('transform', 'translateY(80px)');
    });

    $('cloud-shadow').forEach((e) => {
      e.style.setProperty('transform', 'translateY(80px)');
    });

    $('components').forEach((e) => {
      e.style.setProperty('background-color', 'rgba(25,30,50,1)');
    });

    $('moon').forEach((e) => {
      e.style.setProperty('opacity', '1');
    });

    $('stars').forEach((e) => {
      e.style.setProperty('transform', 'translateY(-62.5px)');
      e.style.setProperty('opacity', '1');
    });

    document.body.setAttribute('theme-mode', 'dark');
  }
  clearInterval(cloudTimer);
  isClicked.value = true;
  setTimeout(() => {
    isClicked.value = false;
  }, 500);
  isMoved.value = !isMoved.value;
};

const onMouseMove = (_event: MouseEvent) => {
  if (isClicked.value) {
    return;
  }
  if (isMoved.value) {
    $('main-button').forEach((e) => {
      e.style.setProperty('transform', 'translateX(100px)');
    });

    let elements = $('daytime-backgrond');
    elements[0].style.setProperty('transform', 'translateX(110px)');
    elements[1].style.setProperty('transform', 'translateX(73px)');
    elements[2].style.setProperty('transform', 'translateX(46px)');

    elements = $('star');
    elements[0].style.setProperty('top', '10px');
    elements[0].style.setProperty('left', '36px');
    elements[1].style.setProperty('top', '40px');
    elements[1].style.setProperty('left', '87px');
    elements[2].style.setProperty('top', '26px');
    elements[2].style.setProperty('left', '16px');
    elements[3].style.setProperty('top', '38px');
    elements[3].style.setProperty('left', '63px');
    elements[4].style.setProperty('top', '20.5px');
    elements[4].style.setProperty('left', '72px');
    elements[5].style.setProperty('top', '51.5px');
    elements[5].style.setProperty('left', '35px');
  } else {
    $('main-button').forEach((e) => {
      e.style.setProperty('transform', 'translateX(10px)');
    });

    let elements = $('daytime-backgrond');
    elements[0].style.setProperty('transform', 'translateX(10px)');
    elements[1].style.setProperty('transform', 'translateX(7px)');
    elements[2].style.setProperty('transform', 'translateX(4px)');

    elements = $('cloud-son');
    elements[0].style.setProperty('right', '-24px');
    elements[0].style.setProperty('bottom', '10px');
    elements[1].style.setProperty('right', '-12px');
    elements[1].style.setProperty('bottom', '-27px');
    elements[2].style.setProperty('right', '17px');
    elements[2].style.setProperty('bottom', '-43px');
    elements[3].style.setProperty('right', '46px');
    elements[3].style.setProperty('bottom', '-39px');
    elements[4].style.setProperty('right', '70px');
    elements[4].style.setProperty('bottom', '-65px');
    elements[5].style.setProperty('right', '109px');
    elements[5].style.setProperty('bottom', '-54px');
    elements[6].style.setProperty('right', '-23px');
    elements[6].style.setProperty('bottom', '10px');
    elements[7].style.setProperty('right', '-11px');
    elements[7].style.setProperty('bottom', '-26px');
    elements[8].style.setProperty('right', '18px');
    elements[8].style.setProperty('bottom', '-42px');
    elements[9].style.setProperty('right', '47px');
    elements[9].style.setProperty('bottom', '-38px');
    elements[10].style.setProperty('right', '74px');
    elements[10].style.setProperty('bottom', '-64px');
    elements[11].style.setProperty('right', '110px');
    elements[11].style.setProperty('bottom', '-55px');
  }
};

const onMouseOut = (_event: MouseEvent) => {
  if (isClicked.value) {
    return;
  }
  if (isMoved.value) {
    $('main-button').forEach((e) => {
      e.style.setProperty('transform', 'translateX(110px)');
    });

    let elements = $('daytime-backgrond');
    elements[0].style.setProperty('transform', 'translateX(110px)');
    elements[1].style.setProperty('transform', 'translateX(80px)');
    elements[2].style.setProperty('transform', 'translateX(50px)');

    elements = $('star');
    elements[0].style.setProperty('top', '11px');
    elements[0].style.setProperty('left', '39px');
    elements[1].style.setProperty('top', '39px');
    elements[1].style.setProperty('left', '91px');
    elements[2].style.setProperty('top', '26px');
    elements[2].style.setProperty('left', '19px');
    elements[3].style.setProperty('top', '37px');
    elements[3].style.setProperty('left', '66px');
    elements[4].style.setProperty('top', '21px');
    elements[4].style.setProperty('left', '75px');
    elements[5].style.setProperty('top', '51px');
    elements[5].style.setProperty('left', '38px');
  } else {
    $('main-button').forEach((e) => {
      e.style.setProperty('transform', 'translateX(0px)');
    });

    $('daytime-backgrond').forEach((e) => {
      e.style.setProperty('transform', 'translateX(0px)');
    });

    let elements = $('cloud-son');
    elements[0].style.setProperty('right', '-20px');
    elements[0].style.setProperty('bottom', '10px');
    elements[1].style.setProperty('right', '-10px');
    elements[1].style.setProperty('bottom', '-25px');
    elements[2].style.setProperty('right', '20px');
    elements[2].style.setProperty('bottom', '-40px');
    elements[3].style.setProperty('right', '50px');
    elements[3].style.setProperty('bottom', '-35px');
    elements[4].style.setProperty('right', '75px');
    elements[4].style.setProperty('bottom', '-60px');
    elements[5].style.setProperty('right', '110px');
    elements[5].style.setProperty('bottom', '-50px');
    elements[6].style.setProperty('right', '-20px');
    elements[6].style.setProperty('bottom', '10px');
    elements[7].style.setProperty('right', '-10px');
    elements[7].style.setProperty('bottom', '-25px');
    elements[8].style.setProperty('right', '20px');
    elements[8].style.setProperty('bottom', '-40px');
    elements[9].style.setProperty('right', '50px');
    elements[9].style.setProperty('bottom', '-35px');
    elements[10].style.setProperty('right', '75px');
    elements[10].style.setProperty('bottom', '-60px');
    elements[11].style.setProperty('right', '110px');
    elements[11].style.setProperty('bottom', '-50px');
  }
};

let starArray = [...$('.star')].sort((_) => 0.5 - Math.random());

const twinkleDuration = 0.5;
const pauseDuration = 2;

const twinkleStars = () => {
  starArray.forEach((star, index) => {
    setTimeout(
      () => {
        star.classList.add('twinkle');
        setTimeout(() => {
          star.classList.remove('twinkle');
          if (index === starArray.length - 1) {
            setTimeout(twinkleStars, pauseDuration * 1000);
          }
        }, twinkleDuration * 1000);
      },
      index * (twinkleDuration + pauseDuration) * 1000,
    );
  });
};

twinkleStars();

const getRandomDirection = () => {
  const directions = ['2px', '-2px'];
  return directions[Math.floor(Math.random() * directions.length)];
};

const moveElementRandomly = (element: any) => {
  const randomDirectionX = getRandomDirection();
  const randomDirectionY = getRandomDirection();
  element.style.transform = `translate(${randomDirectionX}, ${randomDirectionY})`;
};

let cloudTimer = setInterval(() => {
  $('.cloud-son').forEach(moveElementRandomly);
}, 1000);

onMounted(() => {
  document.addEventListener('DOMContentLoaded', () => {});
});

onUnmounted(() => {
  document.removeEventListener('DOMContentLoaded', () => {});
});
</script>

<style lang="less" scoped>
// * {
//   margin: 0;
//   padding: 0;
//   transition: 0.7s;
// }

.components {
  position: fixed;
  margin-left: -90px;
  margin-top: -35px;
  width: 180px;
  height: 70px;
  background-color: rgba(70, 133, 192, 1);
  border-radius: 100px;
  box-shadow: inset 0 0 5px 3px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: 0.7s;
  transition-timing-function: cubic-bezier(0, 0.5, 1, 1);
}

.main-button {
  margin: 7.5px 0 0 7.5px;
  width: 55px;
  height: 55px;
  background-color: rgba(255, 195, 35, 1);
  border-radius: 50%;
  box-shadow:
    3px 3px 5px rgba(0, 0, 0, 0.5),
    inset -3px -5px 3px -3px rgba(0, 0, 0, 0.5),
    inset 4px 5px 2px -2px rgba(255, 230, 80, 1);
  cursor: pointer;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.moon {
  position: absolute;
  background-color: rgba(150, 160, 180, 1);
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  transition: 0.5s;
  opacity: 0;
}

.moon:nth-child(1) {
  top: 7.5px;
  left: 25px;
  width: 12.5px;
  height: 12.5px;
}

.moon:nth-child(2) {
  top: 20px;
  left: 7.5px;
  width: 20px;
  height: 20px;
}

.moon:nth-child(3) {
  top: 32.5px;
  left: 32.5px;
  width: 12.5px;
  height: 12.5px;
}

.daytime-backgrond {
  position: absolute;
  border-radius: 50%;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.daytime-backgrond:nth-child(2) {
  top: -20px;
  left: -20px;
  width: 110px;
  height: 110px;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: -2;
}

.daytime-backgrond:nth-child(3) {
  top: -32.5px;
  left: -17.5px;
  width: 135px;
  height: 135px;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: -3;
}

.daytime-backgrond:nth-child(4) {
  top: -45px;
  left: -15px;
  width: 160px;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.05);
  z-index: -4;
}

.cloud,
.cloud-shadow {
  transform: translateY(10px);
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.cloud-son {
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  z-index: -1;
  transition:
    transform 6s,
    right 1s,
    bottom 1s;
}

.cloud-son:nth-child(6n + 1) {
  right: -20px;
  bottom: 10px;
  width: 50px;
  height: 50px;
}

.cloud-son:nth-child(6n + 2) {
  right: -10px;
  bottom: -25px;
  width: 60px;
  height: 60px;
}

.cloud-son:nth-child(6n + 3) {
  right: 20px;
  bottom: -40px;
  width: 60px;
  height: 60px;
}

.cloud-son:nth-child(6n + 4) {
  right: 50px;
  bottom: -35px;
  width: 60px;
  height: 60px;
}

.cloud-son:nth-child(6n + 5) {
  right: 75px;
  bottom: -60px;
  width: 75px;
  height: 75px;
}

.cloud-son:nth-child(6n + 6) {
  right: 110px;
  bottom: -50px;
  width: 60px;
  height: 60px;
}

.cloud {
  z-index: -2;
}

.cloud-shadow {
  position: absolute;
  right: 0;
  bottom: 25px;
  opacity: 0.5;
  z-index: -3;
}

.stars {
  transform: translateY(-125px);
  z-index: -2;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
}

.big {
  --size: 7.5px;
}

.medium {
  --size: 5px;
}

.small {
  --size: 3px;
}

.star {
  position: absolute;
  width: calc(2 * var(--size));
  height: calc(2 * var(--size));
}

.star:nth-child(1) {
  top: 11px;
  left: 39px;
  animation-name: star;
  animation-duration: 3.5s;
}

.star:nth-child(2) {
  top: 39px;
  left: 91px;
  animation-name: star;
  animation-duration: 4.1s;
}

.star:nth-child(3) {
  top: 26px;
  left: 19px;
  animation-name: star;
  animation-duration: 4.9s;
}

.star:nth-child(4) {
  top: 37px;
  left: 66px;
  animation-name: star;
  animation-duration: 5.3s;
}

.star:nth-child(5) {
  top: 21px;
  left: 75px;
  animation-name: star;
  animation-duration: 3s;
}

.star:nth-child(6) {
  top: 51px;
  left: 38px;
  animation-name: star;
  animation-duration: 2.2s;
}

@keyframes star {
  0%,
  20% {
    transform: scale(0);
  }

  20%,
  100% {
    transform: scale(1);
  }
}

.star-son {
  float: left;
}

.star-son:nth-child(1) {
  --pos: left 0;
}

.star-son:nth-child(2) {
  --pos: right 0;
}

.star-son:nth-child(3) {
  --pos: 0 bottom;
}

.star-son:nth-child(4) {
  --pos: right bottom;
}

.star-son {
  width: var(--size);
  height: var(--size);
  background-image: radial-gradient(circle var(--size) at var(--pos), transparent var(--size), #fff);
}

.star {
  transform: scale(1);
  transition-timing-function: cubic-bezier(0.56, 1.35, 0.52, 1);
  transition: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}

.twinkle {
  transform: scale(0);
}
</style>
