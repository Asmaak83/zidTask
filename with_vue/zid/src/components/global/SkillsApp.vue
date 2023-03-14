<template>
  <div class="skills pt-5">
    <div class="header pt-5">
      <h2 class="text-center fw-bold fs-4 lh-1">التطبيقات المميزة</h2>
      <p class="text-center fs-6 lh-1">
        تطبيقات تقدم حلول وخدمات مميزة نوصى بتجربتها
      </p>
    </div>
    <div class="container pt-4 mt-4">
      <div class="row">
        <div
          class="col-lg-3 col-md-5 col-sm-5 col-xs-9"
          v-for="(obj, key) in skillsjson"
          :key="key"
        >
          <div class="box bg-light text-end rounded">
            <img
              class="w-25 rounded d-inline img-fluid m-2"
              src="./image/komra.jpg"
              alt=""
            />
            <div class="text flex-row-reverse">
              <h5 class="d-inline">{{ obj.caption }}</h5>
              <img src="./image/star1.png" alt="" />
              <p>
                تطوير:<span>{{ obj.name }}</span>
              </p>
            </div>
            <p>
              نظام اللولاء الامثل الذى يمتلك من رفع مبيعاتك نظام اللولاء الامثل
              الذى يمتلك من رفع مبيعاتك
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="btn bg-white text-warning d-flex m-auto btn-lg btn-sm-sm">
      <font-awesome-icon
        icon="fa-solid fa-angle-left"
        class="blink_me me-1 pt-1 fs-4"
      />
      جميع التطبيقات
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
.skills .box img {
  width: 45px;
  height: 45px;
}
.skills .box .text {
  position: relative;
  top: -60px;
  right: 90px;
}
.skills .box .text h5 {
  color: var(--main-color);
  font-size: 15px;
}
.skills .box .text p {
  font-size: 14px;
  top: -10px;
}
.skills .box p {
  font-size: 14px;
  position: relative;
  top: -60px;
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
