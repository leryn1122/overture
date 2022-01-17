<template>
  <div class="container">
    <div class="card">
      <div class="content">
        <h1>01</h1>
        <h2>card one</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laborum non. Officia, blanditiis. Quidem
          provident exercitationem unde excepturi delectus repudiandae aspernatur neque ea, architecto vel. Quod
          delectus aliquid aspernatur illum!
        </p>
        <a href="#">Read more</a>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h1>02</h1>
        <h2>card two</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laborum non. Officia, blanditiis. Quidem
          provident exercitationem unde excepturi delectus repudiandae aspernatur neque ea, architecto vel. Quod
          delectus aliquid aspernatur illum!
        </p>
        <a href="#">Read more</a>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h1>03</h1>
        <h2>card three</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, laborum non. Officia, blanditiis. Quidem
          provident exercitationem unde excepturi delectus repudiandae aspernatur neque ea, architecto vel. Quod
          delectus aliquid aspernatur illum!
        </p>
        <a href="#">Read more</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Homepage',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #161623;
}

body::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#f00, #f0f);
  clip-path: circle(30% at right 70%);
}
</style>
