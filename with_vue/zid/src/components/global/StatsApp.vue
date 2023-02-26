<template>
  <div class="stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="box">
            <div class="animat">
              <div class="logo"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="box">
            <h1>كل ماتحتاجه لنمو متجرك فى مكان واحد</h1>
            <p>
              مميزات سوق تطبيقات زد تساعدك فى سهولة وسرعة الاستفادة من خدمات
              وحلول سوق التطبيقات لنمو متحرك ومضاعفة ارباحك
            </p>
            <div class="text">
              <img src="./image/stata1.gif" alt="" />
              <h3>سهولة ادارة وتفعيل تطبيقات فى نفس لوحة تحكم متجرك</h3>
            </div>
            <div class="text">
              <img src="./image/stata2.gif" alt="" />
              <h4 class="texttwo">دعم فنى ومتكامل متوفر على مدار الساعة</h4>
            </div>
            <div class="text">
              <img src="./image/stata3.gif" alt="" />
              <h5 class="textthree">
                اسعار تنافسية مع تجربه مجانيه وباقات اشتراك متنوعه
              </h5>
            </div>
            <button>
              <i class="blink_me fa-solid fa-less-than"></i> تصفح التطبيقات
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
.stats .container {
  background-color: #faf8f8;
  margin-top: 90px;
  padding-top: 50px;
  padding-bottom: 20px;
}
.stats .container .box {
  text-align: end;
}
.stats .container .box h1 {
  color: var(--main-color);
  position: relative;
  right: 40px;
  font-size: 30px;
}
.stats .container .text {
  display: flex;
  flex-direction: row-reverse;
  color: #777;
  position: relative;
  padding: 0 0 20px 0;
}
.stats .container .box p {
  font-size: 18px;
  position: relative;
  right: 40px;
  margin-left: 160px;
}
.stats .container .text img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  box-shadow: 5px 5px #eee;
  right: 40px;
}
.stats .text h3,
h4,
h5 {
  margin-right: 60px;
  margin-top: 10px;
  font-size: 16px;
  color: #777;
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
button {
  text-align: center;
  padding: 10px 60px;
  color: var(--alt-color);
  background-color: var(--main-color);
  border-color: var(--main-color);
  border-radius: 7px;
  font-size: 20px;
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
