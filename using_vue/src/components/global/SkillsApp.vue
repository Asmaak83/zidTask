<template>
  <div class="skills">
    <div class="header">
      <h2>التطبيقات المميزة</h2>
      <p>تطبيقات تقدم حلول وخدمات مميزة نوصى بتجربتها</p>
    </div>
    <div class="container">
      <!-- v-for="(obj, key) in skillsjson" :key="key"> -->
      <div class="box" v-for="(obj, key) in skillsjson" :key="key">
        <img src="./image//komra.jpg" />
        <div class="text">
          <h5>{{ obj.caption }}</h5>
          <img src="./image/star1.png" alt="" />
          <p>
            تطوير:<span>{{ obj.name }}</span>
          </p>
        </div>
        <p>
          نظام اللولاء الامثل الذى يمتلك من رفع مبيعاتك نظام اللولاء الامثل الذى
          يمتلك من رفع مبيعاتك
        </p>
      </div>
    </div>
    <button>
      <i class="blink_me fa-solid fa-less-than"></i> جميع التطبيقات
    </button>
  </div>
</template>
<script>
export default {
  data: () => ({
    skillsjson: [
      {
        caption: "قمرة",
        name: "مر برهوم",
      },
      {
        caption: "قمرة",
        name: "عمر برهوم",
      },
      {
        caption: "قمرة",
        name: "عمر برهوم",
      },
      {
        caption: "قمرة",
        name: "عمر برهوم",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.skills h2 {
  padding-top: 100px;
  text-align: center;
  font-size: 28px;
}
.skills .header p {
  text-align: center;
  font-size: 19px;
  line-height: 1.6;
  padding-top: 6px;
}
.skills .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  padding-top: 50px;
  padding-bottom: 50px;
  gap: 20px;
}
.skills .box {
  background-color: #faf8f8;
  text-align: end;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 35px 30px 0;
  border-radius: 5%;
}
.skills .box .text {
  flex-direction: row-reverse;
}
.skills .box img {
  width: 45px;
  height: 45px;
  border-radius: 20%;
}
.skills .box .text {
}
.skills .box .text h5 {
  color: var(--main-color);
  font-size: 18px;
  position: relative;
  top: -14px;
  left: -60px;
}
.skills .box .text img {
  position: relative;
  top: -90px;
  left: -70px;
}
.skills .box .text p {
  position: relative;

  font-size: 15px;
}
.skills .box .text span {
  color: #696767;
}
.skills .box p {
  position: relative;
  top: -55px;
  left: -50px;
  font-size: 12px;
  line-height: 1.8;
  letter-spacing: 1.2;
  font-weight: normal;
}
.skills button {
  text-align: center;
  position: relative;

  padding: 20px 60px;
  background-color: white;
  color: var(--alt-color);
  font-size: 20px;
  border: none;
  bottom: 30px;
}
.skills i {
  padding: 0px 10px;
  font-size: 25px;
}
.skills .blink_me {
  animation: blinker 1s linear infinite;
  color: var(--alt-color);
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
