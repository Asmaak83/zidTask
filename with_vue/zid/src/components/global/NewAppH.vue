// eslint-disable-next-line vue/valid-template-root
<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-light my-lg-0">
    <div
      class="container d-flex flex-row-reverse md-d-flex md-flex-colomn-reverse"
    >
      <div class="logo">
        <img class="ms-4" src="./image/ZAM_1.png" />
      </div>
      <button
        class="text-decoration-none navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main"
        aria-controls="main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav ms-auto mb-lg-0">
          <router-link to="/New" class="text-decoration-none">
            <li class="nav-item">
              <a class="nav-link p-2 me-3 text-dark">طور تطبيق</a>
            </li>
          </router-link>
          <router-link to="/help" class="text-decoration-none">
            <li class="nav-item">
              <a class="nav-link p-2 text-dark">التطبيقات</a>
            </li>
          </router-link>
          <router-link to="/about" class="text-decoration-none">
            <li class="nav-item">
              <a class="nav-link nounderline p-2 text-dark">التصنيفات</a>
            </li>
          </router-link>
          <router-link to="/" class="text-decoration-none">
            <li class="nav-item">
              <a class="nav-link p-2 text-dark" aria-current="page">
                الرئيسية</a
              >
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NewAppH",
};
</script>
<style lang="scss" scoped>
.nav-link {
}
nav ul li {
  padding: 0 50px 0 20px;

  a:hover {
    text-decoration: none;
  }
}
.logo img {
  width: 140px;
  height: 40px;
}
</style>
