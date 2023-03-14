<template>
  <div class="stats bg-light pt-5">
    <div class="container pb-2">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="box text-align-end">
            <div class="animat">
              <div class="logo"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="box text-end">
            <h1 class="fs-2 mr-0">كل ماتحتاجه لنمو متجرك فى مكان واحد</h1>
            <p class="text-end fs-5 fst-normal">
              مميزات سوق تطبيقات زد تساعدك فى سهولة وسرعة الاستفادة من خدمات
              وحلول سوق التطبيقات لنمو متحرك ومضاعفة ارباحك
            </p>
            <div class="text d-flex flex-row-reverse">
              <img src="./image/stata1.gif" alt="" class="rounded-circle" />
              <h3 class="fs-6 d-inline p-2 fw-light">
                سهولة ادارة وتفعيل تطبيقات فى نفس لوحة تحكم متجرك
              </h3>
            </div>
            <div class="text d-flex flex-row-reverse">
              <img src="./image/stata2.gif" alt="" class="rounded-circle" />
              <h4 class="fs-6 d-inline p-2 fw-light">
                دعم فنى ومتكامل متوفر على مدار الساعة
              </h4>
            </div>
            <div class="text d-flex flex-row-reverse">
              <img src="./image/stata3.gif" alt="" class="rounded-circle" />
              <h5 class="fs-6 d-inline p-2 fw-light">
                اسعار تنافسية مع تجربه مجانيه وباقات اشتراك متنوعه
              </h5>
            </div>
            <button
              class="btn text-warning text-align-center btn-lg m-4 btn-sm-sm"
            >
              <font-awesome-icon
                icon="fa-solid fa-angle-left"
                class="blink_me me-1 pt-1 fs-4"
              />
              تصفح التطبيقات
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StatsApp",
};
</script>
<style lang="scss" scoped>
.stats {
  margin-top: 120px;
}
.stats .container .box h1 {
  color: var(--main-color);
}
.stats .container .text img {
  width: 40px;
  height: 40px;
}
.stats .container .animat {
  position: relative;
  overflow: hidden;
  z-index: 333;
  border-radius: 15px;
  background-color: var(--main-color);
  margin: auto;
  max-width: 80%;
  height: 400px;
  animation-direction: alternate;
  animation: stat 5s infinite linear;
}
@keyframes stat {
  0% {
    background-image: url(./image/wall_paper_test.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }
  25% {
    background-image: url(./image/wall_paper_test.png);
  }
  50% {
    background-image: url(./image/wall_paper_test.png);
  }
  75% {
    background-image: url(./image/Zid-logo-PNG\ -1.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50%;
  }
  100% {
    background-image: url(./image/Zid-logo-PNG\ -1.png);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 50%;
  }
}
.stats i {
  padding: 0px 10px;
  font-size: 25px;
}
.stats .blink_me {
  animation: blinker 1s linear infinite;
  color: var(--alt-color);
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
