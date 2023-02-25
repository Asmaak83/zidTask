<template>
  <!-- start landing -->
  <div class="landing">
    <div class="container">
      <div class="text">
        <h1>طور متحرك ووسع افاق تجارتك مع سوق تطبيقات زد</h1>
        <p>
          طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زاد التى تساعدك فى نمو
          ارباحك عبر ادارة عمليات متحرك بشكل فعال واحترافى
        </p>
      </div>
      <button>
        <i class="blink_me fa-solid fa-less-than"></i> تصفح التطبيقات
      </button>
    </div>

    <div class="articles" id="articles">
      <div class="dots dots-up"></div>
      <div class="container">
        <div class="logo"></div>
      </div>
      <div class="circle"></div>
    </div>
    <!-- end landing -->
    <!-- it is component StatsApp-->
    <StatsApp></StatsApp>
    <!-- it is component SkillsApp-->
    <SkillsApp></SkillsApp>
    <!-- start footer -->
    <div class="footer">
      <img src="./image/ZAM_1.png" alt="" />
      <div class="icons">
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      <i class="up fa-solid fa-arrow-up"></i>
      <i class="chat fa-solid fa-comment"></i>
    </div>
  </div>
</template>
<script>
import SkillsApp from "/src/components/global/SkillsApp";
import StatsApp from "/src/components/global/StatsApp";
export default {
  name: "HomeApp",
  components: {
    SkillsApp,
    StatsApp,
  },
};
</script>
<style lang="scss">
/*start landing*/
.landing .container {
  position: relative;
  text-align: center;
}
.landing .container .text {
  margin: auto;
  text-align: center;
  padding: 70px 0px 30px;
}
.landing .text h1 {
  color: #8053ac;
  font-size: 40px;
}
.landing .text p {
  font-size: 20px;
  line-height: 1.5;
  margin: auto;
  width: 35%;
}

.landing button {
  text-align: center;
  padding: 10px 60px;
  color: var(--alt-color);
  background-color: var(--main-color);
  border-color: var(--main-color);
  border-radius: 7px;
  font-size: 20px;
}
.landing i {
  padding: 0px 10px;
  font-size: 25px;
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
.articles {
  padding: 50px;
}
.articles .dots {
  background-image: url(./image/dots.png);
  height: 186px;
  width: 190px;
  background-repeat: no-repeat;
  position: absolute;
}
.dots-up {
  top: 400px;
  left: 220px;
}
.articles .container {
  position: relative;
  overflow: hidden;
  z-index: 333;
  border-radius: 15px;
  background-color: var(--main-color);
  margin: auto;
  max-width: 60%;
  height: 500px;
  animation-direction: alternate;
  animation: move 5s infinite linear;
}
@keyframes move {
  0% {
    left: 0;
    width: 0;
    background-color: var(--main-color);
    background-image: url(./image/Zid-logo-PNG\ -1.png);
    background-position: 50%;
    background-size: 50%;
    background-repeat: no-repeat;
  }
  25% {
    left: 0;
    width: 100%;
    background-color: var(--main-color);
    background-image: url(./image/Zid-logo-PNG\ -1.png);
    background-position: 50%;
  }
  50% {
    left: 0;
    width: 0;
    background-color: var(--main-color);
    background-image: url(./image/Zid-logo-PNG\ -1.png);
    background-position: 50%;
  }
  51% {
    left: 0;
    width: 0;
    background-color: var(--alt-color);
  }
  75% {
    left: 0;
    width: 100%;
    background-color: var(--alt-color);
    background-image: url(./image/logo2.webp);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 50%;
  }
  100% {
    left: 0;
    width: 0;
    background-color: var(--alt-color);
    background-image: url(./image/logo2.webp);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 50%;
  }
}
.articles .logo img {
  position: relative;
  top: 140px;
  left: 150px;
  z-index: 444;
  width: 50%;
  height: 50%;
}
.articles .circle {
  position: absolute;
  width: 250px;
  height: 250px;
  background-color: var(--alt-color);
  border-radius: 50%;
  right: 230px;
  bottom: -380px;
}
/* end landing  */
/*star footer*/
.footer {
  background-color: var(--main-color);
  padding-top: 60px;
  padding-bottom: 40px;
}
.footer img {
  width: 190px;
  height: 100px;
  text-align: center;
}
.footer .icons {
  text-align: center;
  justify-content: center;
  padding: 20px;
}
.footer .icons i {
  color: white;
  font-size: 20px;
  margin: 15px;
}
.footer .up {
  position: fixed;
  bottom: 30px;
  right: -50px;
  background-color: var(--alt-color);
  color: var(--main-color);
  font-weight: bold;
  font-size: 22px;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}
.up.show {
  right: 20px;
}
// .footer .chat {
//   position: fixed;
//   bottom: 30px;
//   background-color: var(--alt-color);
//   color: var(--main-color);
//   font-weight: bold;
//   font-size: 22px;
//   padding: 15px;
//   border-radius: 50%;
//   cursor: pointer;
// }
</style>
