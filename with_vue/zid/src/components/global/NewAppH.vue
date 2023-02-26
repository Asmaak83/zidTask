<template>
  <div class="headerH">
    <div class="navba">
      <ul id="nav">
        <router-link to="/New">
          <li>
            <a>طور تطبيق</a>
          </li>
        </router-link>
        <router-link to="/help">
          <li>
            <a>التطبيقات</a>
          </li>
        </router-link>
        <router-link to="/about">
          <li>
            <a>التصنيفات</a>
          </li>
        </router-link>
        <router-link to="/">
          <li>
            <a>الرئيسية</a>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="logo">
      <img src="./image/ZAM_1.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NewAppH",
};
</script>
<style lang="scss" scoped>
.headerH {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;

  .logo {
    float: right;
  }
  .logo img {
    width: 140px;
    height: 40px;
    padding-left: 40px;
  }
  ul {
    float: right;
    margin: 0;
    li {
      padding: 10px 30px 20px 10px;
      display: inline-block;
      a {
        text-decoration: none;
        font-size: 16px;
        padding: 0px 10px;
        color: black;
      }
    }
  }
}
</style>
