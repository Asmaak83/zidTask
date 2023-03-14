<template>
  <!-- start landing -->
  <div class="landing">
    <div class="container text-center pt-5">
      <div class="text">
        <h1 class="fw-bold fs-1">
          طور متحرك ووسع افاق تجارتك مع سوق تطبيقات زد
        </h1>
        <p class="m-auto fs-6 fw-bold w-50 fw-md-normal">
          طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زاد التى تساعدك فى نمو
          ارباحك عبر ادارة عمليات متحرك بشكل فعال واحترافى
        </p>
      </div>
      <button class="btn text-warning text-align-center btn-lg m-4 btn-sm-sm">
        <font-awesome-icon
          icon="fa-solid fa-angle-left"
          class="blink_me me-1 pt-1 fs-4"
        />
        تصفح التطبيقات
      </button>
    </div>

    <div
      class="container d-lg-flex justify-content-center align-items-center mt-5"
    >
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="slider rounded">
          <div
            class="carousel-inner imges position-absolute top-50 start-50 translate-middle ps-5"
          >
            <div
              class="carousel-item active w-md-50 w-sm-25"
              data-bs-interval="1000"
            >
              <img
                src="./image/logo3.jpg"
                class="d-block img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item w-md-50 w-sm-25" data-bs-interval="3000">
              <img
                src="./image/ZAM_1.png"
                class="d-block img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item w-md-50 w-sm-25" data-bs-interval="4000">
              <img
                src="./image/logo2.webp"
                class="d-block img-fluid"
                alt="..."
              />
            </div>
          </div>
          <div class="dots">
            <img
              src="./image/dots.png"
              class="position-absolute w-25 h-50 top-0 start-0 translate-middle w-md-50 w-sm-25"
            />
          </div>
          <div class="circle"></div>
        </div>
      </div>
    </div>

    <!-- end landing -->
    <!-- it is component StatsApp-->
    <StatsApp></StatsApp>
    <!-- it is component SkillsApp-->
    <SkillsApp></SkillsApp>
    <!-- it is component storeApp-->
    <StoreApp></StoreApp>
    <!-- start footer -->
    <div class="footer pt-5 pb-5 mt-5 text-align-center">
      <img
        src="./image/ZAM_1.png"
        class="d-flex text-align-center m-auto pb-5"
        alt=""
      />
      <div
        class="icons text-light d-flex justify-content-center text-align-center m-auto"
      >
        <font-awesome-icon
          icon="fa-brands fa-youtube"
          class="me-3 fs-4 rounded"
        />
        <font-awesome-icon icon="fa-brands fa-linkedin" class="me-3 fs-4" />
        <font-awesome-icon icon="fa-brands fa-instagram" class="me-3 fs-4" />
        <font-awesome-icon icon="fa-brands fa-twitter" class="me-3 fs-4" />
      </div>
      <!-- component ScrollTopArrw -->
      <ScrollTopArrw></ScrollTopArrw>
      <div class="pb-4 ps-3">
        <font-awesome-icon
          icon="fa-solid fa-comments"
          class="float-start p-3 bg-warning rounded-circle me-3"
        />
      </div>
    </div>
    <!-- end footer -->
  </div>
</template>
<script>
import SkillsApp from "/src/components/global/SkillsApp";
import StatsApp from "/src/components/global/StatsApp";
import StoreApp from "/src/components/global/StoreApp";
import ScrollTopArrw from "/src/components/ScrollTopArrw";
export default {
  name: "HomeApp",
  components: {
    SkillsApp,
    StatsApp,
    StoreApp,
    ScrollTopArrw,
  },
};
</script>
<style lang="scss">
.landing .text h1 {
  color: var(--main-color);
}

.landing button {
  padding: 10px 60px;
  color: var(--alt-color);
  background-color: var(--main-color);
  border-radius: 7px;
}
.slider {
  width: 700px;
  height: 430px;
  background-color: var(--main-color);
  z-index: 200;
}
@media screen and (max-width: 992px) {
  .slider {
    background-color: transparent;
  }
}
.slider img {
  width: 600px;
  height: 370px;
  z-index: 300;
}
.slider .dots img {
  z-index: -1;
}
@media screen and (max-width: 992px) {
  .slider .dots img {
    display: none;
  }
}

.slider .circle {
  position: absolute;
  width: 250px;
  height: 250px;
  background-color: var(--alt-color);
  border-radius: 50%;
  right: -50px;
  bottom: -90px;
  z-index: -100;
}
.footer img {
  width: 190px;
  height: 100px;
}
.landing .blink_me {
  animation: blinker 1s linear infinite;
  color: var(--alt-color);
}
@keyframes blinker {
  50% {
    opacity: 0;
  }
}
.footer {
  background-color: var(--main-color);
}
</style>
