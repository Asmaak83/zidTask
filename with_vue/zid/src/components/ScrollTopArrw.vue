<template>
  <ScrollTop>
    <a class="btn">
      <font-awesome-icon
        icon="fa-solid fa-arrow-up 'angle-double-up' 'fas'"
        class="text-body p-3 bg-warning rounded-circle ms-3 up"
      />
    </a>
  </ScrollTop>
</template>

<script>
import ScrollTop from "/src/components/ScrollTop";
export default {
  components: {
    ScrollTop,
  },
};
</script>
