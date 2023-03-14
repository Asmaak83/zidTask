<template>
  <div id="App">
    <NewAppH />
    <router-view />
  </div>
</template>

<script>
import NewAppH from "@/components/global/NewAppH.vue";

export default {
  name: "App",
  components: { NewAppH },
};
</script>

<style lang="scss"></style>
